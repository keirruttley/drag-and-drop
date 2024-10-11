# BSC1a-JS Introduction

## What We Did

In this workshop we learnt about [JavaScript](https://vle.norwichuni.ac.uk/pluginfile.php/74069/mod_resource/content/2/JavaScript%20Introduction.pdf), the web development coding language, learning about some basics of coding such as Variables, Functions, and Events. To apply this knowledge, we started developing a character choice interface. The user can browse through three characters until they find the one they like. 

## How to do it at Home

### Preliminary Steps

1. Login and [create a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository). You should give it a significant name, for ex. **Character Choice Website**
2. Using GitHub Desktop, [clone your repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=desktop) to your computer.
3. From GitHub Desktop, click the button "Open In Visual Studio Code"
4. Create a new HTML file, a new `styles.css` file, and link it to the HTML. If you struggle with this step, review [HTML & CSS workshop](https://github.com/DianaVallverdu-NUA/BSC1a-HTML)
5. Create [this diagram](https://miro.com/app/board/uXjVLUfEZKc=/?moveToWidget=3458764602927451353&cot=14) with (minimmum) given styles.
6. Your website you should similar [to this one](https://miro.com/app/board/uXjVLUfEZKc=/?moveToWidget=3458764602928304955&cot=14)
7. Find three character images and save them in an assets subfolder.
8. In your image Element, add a `src` attribute pointing to one of those images, and an `alt` attribute explaining what the image displays.

### Linking JavaScript with HTML

1. Create a new subfolder named `js` and, inside said subfolder, a new file named `script.js`
2. In your html file, add the following line in the `<head>` element:
3. ```JavaScript
<script src="js/character-choice.js" defer></script>
   ```
