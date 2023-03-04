<h1 align='center'>GUIDE ON HOW TO CONTRIBUTE TO THE REPOSITORY</h1>

<h3>Steps</h3>
<strong>NOTE: </strong>These steps are meant for those who haven't cloned the repository before, if you have cloned the repository before, you can skip to <a href='#step4'>step 4</a>.
<h4><b>1. </b>Fork the repository.</h4>

> Forking allows you to make a copy of the main repository to your main github account so that you can make changes in it. 

<br>
<h4><b>2. </b>Clone the repository.</h4>

```bash

$ git clone https://github.com/<github.username>/ReactGroup.git
```

> Cloning a repository should assist you to draw all the source code that is in your remote repository into your local repository. In other words downloading the source code from your github account, make sure you clone the repository from your forked repository and not the main repository.


<h4><b>3. </b>Install all dependancy packages.</h4>

```bash

$ npm install

then

$ npm start
```

> After cloning a React repository, you will notice that the <code>node_modules</code> folder is not present. This is because it is included in the <code>.gitignore</code> file while the project is being pushed to github. The list of packages the React project use are included in the <code>package.json</code> file, to install them you need to run the command <code>npm install</code>, this will create a <code>node_modules</code> folder with all the dependancies needed for the project. <code>npm start</code> will start the project in your browser.


<strong>NOTE</strong> Always <code> git pull </code> before you start working on a project to make sure you have the latest version of the project.
<h4 id='step4'><b>4. </b>Create a new branch and checkout to it.</h4>

```bash

$ git branch {new-branch-name}
$ git checkout {new-branch-name}
```

> In your local repository, create a new branch with a name of your choice, switch to the new branch created and make it your working branch where you will add and commit the changes made in the repository.

<h4><b>5. </b>Make changes, commit and push to your remote repository.</h4>

```bash
$ git add .
$ git commit -m "Meaningfull message"
$ git push origin {new-branch-name}
```

> You should commit all the files changed before pushing the changes made to your remote repository. While pushing the changes make sure that you push to your new branch created in your local repository.

<h4><b>6. </b>Create a pull request.(PR)</h4>

> Once you've pushed changes to your remote repository under the {new-branch-name} created, create a pull request, this informs the contributors of the repository that there are new changes made that need to be reviewed. After reviewing the changes the pull request can then be merged to the main branch if there are no conflicts, you are allowed to delete a branch after merging the changes made in it.

<h4><b>7. </b>Delete branch after merge, sync your main forked branch with the main branch of the owner's repo.</h4>

> After merging the changes made in your new branch to the main branch, you can delete the branch. To delete a branch, run the command <code>git branch -d {new-branch-name}</code>. To sync your main branch with the main branch of the owner's repository, run the command <code>git pull upstream main</code>. This will pull all the changes made in the main branch of the owner's repository into your main branch. Alternatively you can use github GUI to delete a branch and sync your main branch with the main branch of the owner's repository.