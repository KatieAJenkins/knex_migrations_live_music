# Git Hub

### To Create and Checkout New Branch

1. Change into project directory

2. Checkout a new branch name

   ```
   git checkout -b branch_name \\branch_name = directory name
   ```

3. Create and switch to new feature branch

   ```
   git checkout -b branch_name
   ```

4. Install express as dependency

   ```
   npm install --save express
   ```

   ​

### To Merge Branch with Master

1. Checkout Master

   ```
   git checkout master
   ```

2. Merge feature branch into master

   ```
   git merge branch_name
   ```

3. Delete feature branch

   ```
   git br -d branch_name
   ```

   ​

# GitHub – Master/Feature Branch Workflow

1. Create Master GitHub – This is for the group to work on. Add permissions to collaborators so they can create feature branches.
2. Git Clone Repo – clone the repo on your computer
3. Create Feature Branch on GitHub - for new feature.
4. Git pull origin master – This gets your local machine up to date with any changes done in GitHub on master including new feature branch.
5. Git checkout branchname – This moves you into the new branch to work on.
6. Work On Your Feature
7. Git add – Add your changes to git
8. Git Commit – commit your changes to your local branch
9. Git pull origin master – This makes sure everything is current on your local machine
10. Resolve Merge Conflicts – resolving merge conflicts from the feature branch
11. Git push origin branchname – this pushes your change to the GitHub branch.
12. On GitHub - Create new pull request – Compare and Pull (look at the changes, look for any conflicts, etc.)
13. Make sure “Able To Merge” –on GitHub
14. Create Pull Request – on GitHub
15. Check for Changes – review changes, teammates can review and approve
16. Merge Pull Request – Now Master is up to date.
17. Move to new branch – git checkout master or get checkout newbranch – make sure you’re working on the right branch – git pull origin master to make sure you’re still up to date.