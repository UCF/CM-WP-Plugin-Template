# CM-Documentation-Templates

A set of project documentation templates for use in new projects by UCF CM.


## How to use these files

In this project, each set of available templates is split out into unique branches.  Templates are grouped by project type and purpose; e.g. `plugin-files`, `theme-wiki`.

### Creating a new wiki

Whenever you're starting a new project hosted on Github, you should set up a new project wiki to host documentation and usage information.  A project wiki is a series of markdown files (and, optionally, images) that live in their own separate repo.  You can pull the wiki repo down locally to make changes, or make edits within Github directly.

For more information on Github wikis, [check out their documentation here](https://help.github.com/articles/about-github-wikis/).

**Note: these instructions are intended for brand new, unedited wikis.**  We recommend making changes to existing wikis manually to avoid accidentally overwriting data.

#### Instructions:

1. From **your project repo** in Github, click on the "Wiki" tab.

    <img src="https://help.github.com/assets/images/help/wiki/wiki_menu_link.png">

    If you haven't created any pages for this wiki yet (you see a welcome message with a "Create the first page" button), create a new "Home" page and save it.  Else, proceed to the next step.

2. If you haven't already done so, clone **this repo** onto your machine:

    `$ git clone git@github.com:UCF/CM-Documentation-Templates.git`

3. `$ cd` into the CM-Documentation-Templates repo.

4. Choose a template branch to base your new wiki off of (wiki branches all end with `-wiki`), then run:

    `$ git push git@github.com:UCF/YOUR_PROJECT.wiki.git +TEMPLATE_BRANCH_NAME:master`

    where `YOUR_PROJECT` corresponds to your project's slug on Github (e.g. `Main-Site-Theme`), and `TEMPLATE_BRANCH_NAME` refers to the template branch you chose (e.g. `plugin-wiki` or `theme-wiki`).

    **Note: this step pushes a forced update onto your project's wiki!  Do NOT run this git command on an existing wiki, or you will lose your changes.**


### Creating README and CONTRIBUTING files

TODO
