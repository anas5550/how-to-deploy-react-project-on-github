1: replace/modify below line in Package.json
"homepage": "https://your_github_user_name.github.io/your_project_name",


2: Add below in scripts in pkg.json file

"predeploy": "npm run build",
"deploy": "gh-pages -d build"

3: Save the files, and run below command one after another:
  1: npm install --save gh-pages
  2: npm run deploy

Now All Set...
