# CM-Project-Templates

A set of project documentation and configuration templates for use in new projects by UCF CM.


## How to use these files

In this project, each set of available templates is split out into unique branches.  Templates are grouped by project type and purpose; e.g. `plugin-files`, `theme-wiki`.

Know what you're looking for?  See below:

### WordPress Plugins
- [Plugin markdown files](https://github.com/UCF/CM-Documentation-Templates/tree/plugin-files)
- [Plugin wiki template](https://github.com/UCF/CM-Documentation-Templates/tree/plugin-wiki)

### WordPress Themes
- [Theme markdown files](https://github.com/UCF/CM-Documentation-Templates/tree/theme-files)
- [Theme wiki template](https://github.com/UCF/CM-Documentation-Templates/tree/theme-wiki)

-----

## Creating a new wiki

Whenever you're starting a new project hosted on Github, you should set up a new project wiki to host documentation and usage information.  A project wiki is a series of markdown files (and, optionally, images) that live in their own separate repo.  For more information on Github wikis, [check out their documentation here](https://help.github.com/articles/about-github-wikis/).

**Note: these instructions are intended for brand new, unedited wikis.**  We recommend making changes to existing wikis manually to avoid accidentally overwriting data.

TODO update steps to pull/push changes relative to the _wiki repo_, not _this repo_

### Instructions:

1. From **your project repo** in Github, click on the "Wiki" tab.

    <img src="https://help.github.com/assets/images/help/wiki/wiki_menu_link.png">

    If you haven't created any pages for this wiki yet (you see a welcome message with a "Create the first page" button), create a new "Home" page and save it (don't worry about the contents of this new file; they'll get overwritten).  Else, proceed to the next step.

2. If you haven't already done so, clone **this repo** onto your machine:

    `git clone git@github.com:UCF/CM-Documentation-Templates.git`

    Otherwise, skip to the next step.

3. `cd` into the `CM-Documentation-Templates` repo on your machine.  If you haven't done so in a while, pull down the latest project changes.

4. Choose a template branch to base your new wiki off of (wiki branches all end with `-wiki`), then run:

    `git push git@github.com:UCF/YOUR_PROJECT.wiki.git +TEMPLATE_BRANCH_NAME:master`

    where `YOUR_PROJECT` corresponds to your project's slug on Github (e.g. `Main-Site-Theme`), and `TEMPLATE_BRANCH_NAME` refers to the template branch you chose (e.g. `plugin-wiki` or `theme-wiki`).

    **Note: this step pushes a forced update onto your project's wiki!  Do NOT run this git command on an existing wiki, or you will lose your changes.**

From this point, you can [edit your project's wiki files directly in Github](https://help.github.com/articles/adding-wiki-pages-via-the-online-interface/), or [pull down and edit the wiki repo locally](https://help.github.com/articles/adding-and-editing-wiki-pages-locally/).

-----

## Creating a new theme or plugin

To ensure our projects are created with the latest configurations and README information, CM devs should start new projects from template branches in this repo.  Use the guide below to get started:

### Instructions:

1. [Create a new repository in Github](https://github.com/new).  Do not initialize the repo with a README or other extra files.

2. Within your local WordPress instance, create a new directory for your project, and name it whatever you named your new repo in Github.

    For a new plugin, this directory should be created in `/wp-content/plugins/`; for a new theme, create it in `/wp-content/themes/`.

3. `cd` into the new plugin or theme directory in your WordPress instance.

4. Pull down the relevant template files for your project.

    **For Plugins:**

    `git clone --depth=1 -b plugin-files git@github.com:UCF/CM-Project-Templates.git .; rm -rf .git`

    **For Themes:**

    `git clone --depth=1 -b theme-files git@github.com:UCF/CM-Project-Templates.git .; rm -rf .git`

5. Initialize a new git repository with the template files and push them up to Github, as you would normally (where "MY-PLUGIN-OR-THEME" refers to the project name you used on Github):

    ```
    git init
    git add --all
    git commit -m "Initial commit"
    git remote add origin git@github.com:UCF/MY-PLUGIN-OR-THEME.git
    git push -u origin master
    ```

That's it!  From here, continue developing your plugin or theme as you would normally.  Remember to fill in the placeholder information for your project in the README, CONTRIBUTING doc, and other files! (You can do a project-wide search for `{{` to locate all of these placeholders.)
