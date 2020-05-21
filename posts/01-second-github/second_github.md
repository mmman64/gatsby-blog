---
title: Managing Multiple GitHub Accounts!
slug: managing-multiple-github-accounts
date: 2020-05-21
---

The backbone of Flatiron School is it's Learn.co platform. All of our labs and readings are hosted on GitHub (complete with tests!) - we simply work through the online platform forking and cloning the readings and labs and make a pull request with our solution once we have satisfied the tests.

I already had a personal GitHub account set up previously to benefit from version control as I worked through some personal projects or courses. Unlike others, I was not happy to have my account polluted with hundreds of repositories where I had simply read through some text or made a one-line change to some code.

Yes, with some pruning and maintenance this could have been mitigated somewhat and yes, I spread my GitHub contributions between two accounts that create gaps in my timeline etc. but I thought it would be nice to have a new account to encapsulate all the work completed during my time at Flatiron (and beyond as I complete all the outstanding labs, bonus lessons, and redo some challenges for fun and practice).

This presented me with an interesting challenge that I hadn't anticipated, however. Typically, a developer would have a work machine for their day job and a personal machine. Each machine would house their credentials and have the appropriate authoring configured for the respective GitHub accounts (work and personal).

This works fine as there is a strong separation between the two and conflicts are not possible. Once I had my second account set up, I discovered that there were problems with trying to manage more than one GitHub account from the same machine.

I found that I was always being denied permission to pull from / push to a repository and this led me down a path where I ended up learning a bit more about git configurations and how the SSH agent on OSX behaves. I tend to classify these problems under the term **TTI** (sounds nasty doesn't it?) short for **_Tedious Technical Issue_**. It is the kind of problem that hinders development and productivity, and is often as elusive as it is inconsistent, possbily hard to replicate and always very, very frustrating!

#### _A little bit about SSH and GitHub_

To avoid having to type our credentials every time we interface with our GitHub account, we can instead generate an SSH key on our computer which we then save on our account. Then, whenever we try to push something up to our repository, for example, GitHub will check the SSH key we send against the one stored on our account and if they match, the operation can be completed. If not, we’ll be presented with a validation error instead, which will complain about permissions and deny you access.

Before we continue:

_SSH stands for secure shell and it essentially exists to enable automation of online processes with an emphasis on security. It is essentially the automation of typing out credentials._

So my first issue was that I had generated an SSH key for my main account and was able to interface with it as I pleased, yet when I generated another SSH key for my Flatiron account I was not able to interface with it because the SSH key for my main account was always being sent instead of the correct one.

At this time, I still suspected incorrect authoring as the source of my problem, which was only half true. There are three levels of scope you need to consider when configuring git.

1. System-level scope
2. Global-level scope
3. Project-level scope

When you initialise git within a directory (git init) you create a .git directory which contains a config file (.gitconfig). For now, we're concerned with the git user name and email values, which can be set by using the following commands:

1. `git config user.name <name>`
2. `git config user.email <email>`

This is now set at a project level and should override your global and system-level configurations.

The global config can be found in **~/.gitconfig** and the system level config is found in **/etc/gitconfig**, the difference being - global-level dictates the config for the user in all projects and the system-level dictates the same for all users across all projects. You can set these and override them at a project-level as you prefer.

#### **Warning!**

_Make sure to double-check your authoring configurations when starting a new project! It is easy to forget this and allow the global git configuration to set the wrong user name and email values!_

I was mistaken in thinking that this would be enough for GitHub to somehow identify me and use the correct SSH key to grant me access.

#### _Enter the forgetful SSH agent:_

Why forgetful? Saving the decrypted keys to disk is considered a security vulnerability, so the SSH agent (responsible for handling your SSH keys) only holds them temporarily in memory so that they do not persist between reboots, for example.

To load your SSH keys in a new shell session you can wake up the SSH agent with `eval “$(ssh-agent -s)”` and then add your keys like so:

`ssh-add <name_of_key1> <name_of_key2>`

e.g. `ssh-add id_rsa_github_username`

Alternatively, you can create an alias in your ~/.bashrc (or ~/.zshrc) file that might look something like this:

`alias mygitssh='eval ssh-agent -s && ssh-add ~/.ssh/id_rsa_mygitkey'`
`alias altgitssh='eval ssh-agent -s && ssh-add ~/.ssh/id_rsa_altgitkey'`

Now you can just call your aliases as required. I also found this script, probably on Stack Overflow, that is supposed to automate this when a new shell session is started but it didn't seem to work for me and anyway, I prefer to explicitly call it as of when I need it. I'll include it below in case you might find it useful:

```
if [ -z "$SSH_AUTH_SOCK" ] ; then
 eval `ssh-agent -s`
 ssh-add name_of_key1 name_of_key2
fi
```

#### _SSH Config:_

So now we have the SSH keys loaded but we still need a way to ensure that the correct key is sent where appropriate. I finally came across a promising solution. Let's take a look at a configuration file together. Open up (or create if it doesn't already exist) **~/.ssh/config** and paste the following in (edit as required):

```
# General
Host *
    AddKeysToAgent yes
    UseKeychain yes
    IdentityFile ~/.ssh/id_rsa
# Override for your main account
Host github.com-your_personal_github_user_name
    AddKeysToAgent yes
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_your_personal_github_username
    IdentitiesOnly yes
# Override for your alternative account
Host github.com-your_alternative_github_user_name
    AddKeysToAgent yes
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_your_alternative_github_username
    IdentitiesOnly yes
```
Here we have a general configuration set up for any particular SSH key you may have (non GitHub related) and then two others below that associate the correct SSH key to the appropriate GitHub account.

You'll notice that the value we have for host is not an actual URL. A typical SSH URL would look something like: `git@github.com:user_name/repo_name.git`.

What we have here is the domain followed by a flag that we use to distinguish between the two accounts. Now we need to tell git how it should interpret these flags! In the global **.gitconfig** file paste the following in (edit as required):

```
[url “-your_personal_github_user_name:your_personal_github_user_name/”]
    pushInsteadOf = :your_personal_github_user_name
[url “-your_alternative_github_user_name:your_alternative_github_user_name/”]
    pushInsteadOf = :your_alternative_github_user_name
```
You should now be able to freely interface with both GitHub accounts without permission issues. Again, just ensure you're authoring your commits correctly!
