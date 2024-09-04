Introduction
---
Hello! Thank you for taking the time to review this assessment. Please feel free to reach out if there are any questions.

Preview Link
---
[https://lambent-quokka-d9baf6.netlify.app](https://lambent-quokka-d9baf6.netlify.app)

Installation
---
This project can be installed by navigating to the frontend-assessment subfolder, and installing/running using npm.
```
cd frontend-assessment
npm install
npm run dev
```

Tech Stack
---
Per the recommended practices, this project has been developed using Vue and TailwindCSS.

Notes
---
- I developed exercise 1 as close to the provided designs as possible. However, it seems as though the images provided (from placeholder.com) have been changed since the design brief was created (there is no watermark in bottom right corner anymore). As such, I was unable to decipher whether the stretching on the images was intended to be implemented by the dev in CSS, or was apart of the previous placeholder. For the time being, the image was implemented with no stretching. 
- I have added links between the two exercises in a footer at the bottom of each page for your convenience. I hope this is okay! (This is not intended to be part of the assessed designs)

Bonus Question
---
When adding the strings together, the following occurs: 
1. `'b' + 'a'` = 'ba'
2. `+ + 'a'` results in NaN (Not a Number, as it's not a valid expression)
3. Finally, `+ 'a'`  makes it total `'baNaNa'`. 

The result is then converted to lowercase by using `.toLowerCase()`, thus giving 'banana'