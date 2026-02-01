# Will You Be My Valentine? 💝

A cute and interactive Valentine's Day website with playful animations and interactive buttons!

## ✨ Features

- 🎀 Beautiful gradient background with floating hearts
- 💕 Interactive "Yes" button that grows when you hover over "No"
- 🏃 "No" button that runs away when you try to click it
- 🎭 GIF changes based on how many times you try to say no
- 🎉 Celebration page with confetti when they say "Yes!"
- 📱 Fully responsive design for mobile and desktop

## 🚀 How to Host on GitHub Pages

### Step 1: Create a GitHub Account
1. Go to [GitHub.com](https://github.com)
2. Click "Sign up" and create a free account
3. Verify your email address

### Step 2: Create a New Repository
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name your repository (e.g., `valentine-website` or `will-you-be-my-valentine`)
4. Make sure it's set to **Public**
5. Check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Your Files
1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Scroll down and click "Commit changes"

### Step 4: Enable GitHub Pages
1. In your repository, click "Settings" (gear icon)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select `main` (or `master`) and `/ (root)`
5. Click "Save"

### Step 5: Access Your Website
1. Wait 1-2 minutes for GitHub to build your site
2. Your website will be available at:
   ```
   https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
   ```
   For example: `https://john-doe.github.io/valentine-website/`

3. You'll see a notification in the Pages section with your live URL

## 🎨 Customization

You can customize the website by editing the files:

### Change the GIFs
In `script.js`, update the `gifs` object:
```javascript
const gifs = {
    initial: 'YOUR_GIF_URL_HERE',
    sad: 'YOUR_GIF_URL_HERE',
    crying: 'YOUR_GIF_URL_HERE'
};
```

### Change Colors
In `styles.css`, modify the `:root` variables:
```css
:root {
    --primary-pink: #ff6b9d;
    --secondary-pink: #ffc0d3;
    --accent-purple: #c44569;
}
```

### Change the Question
In `index.html`, find this line and edit it:
```html
<h1 class="question">Will You Be My Valentine?</h1>
```

### Change Button Texts
In `script.js`, modify the `noBtnTexts` array:
```javascript
const noBtnTexts = ['No', 'Are you sure?', 'Really?', 'Think again!', ...];
```

## 📱 Testing Locally

To test the website on your computer before uploading:

1. Download all three files to the same folder
2. Double-click `index.html`
3. It will open in your web browser

## 🎁 Tips

- **Custom Domain**: You can add a custom domain in GitHub Pages settings
- **HTTPS**: GitHub Pages automatically provides HTTPS for your site
- **Share**: Once live, just share the URL with your special someone!
- **Mobile Friendly**: The site works great on phones and tablets

## 🐛 Troubleshooting

**Website not showing up?**
- Make sure your repository is Public
- Wait a few minutes after enabling Pages
- Check that your files are in the root directory (not in a folder)
- Refresh the Pages settings to see the deployment status

**Files not working?**
- Make sure all three files are in the same directory
- Check that file names are exactly: `index.html`, `styles.css`, `script.js`
- Files are case-sensitive on GitHub

## 💖 Enjoy!

Now you're ready to ask that special someone to be your Valentine! Good luck! 🍀

---

Made with ❤️ for Valentine's Day
