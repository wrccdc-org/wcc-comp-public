# Images Directory

## Directory Structure

```
images/
├── volunteers/       # Volunteer profile photos
├── wrccdc/          # WRCCDC competition photos
│   └── 2024/        # By year
├── prccdc/          # PRCCDC competition photos
├── circus/          # CIRCUS competition photos
├── hackercamp/      # HackerCamp photos
└── sponsors/        # Sponsor logos
```

## Image Guidelines

### Sizes
- **Profile Photos:** 400x400px (square)
- **Competition Photos:** 1200x800px (landscape) or 800x1200px (portrait)
- **Sponsor Logos:** 400x200px (maintain aspect ratio)
- **Hero Images:** 1920x1080px (landscape)

### Formats
- **Photos:** JPG (quality 80-85%)
- **Logos:** PNG (with transparency)
- **Icons:** SVG when possible

### File Naming
- Use lowercase
- Use hyphens, not spaces
- Be descriptive: `team-stanford-2024.jpg` not `img_001.jpg`
- Include year when relevant

### Optimization
- Compress images before uploading
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Keep file sizes under 500KB for web photos

## Adding Images

1. Place image in appropriate directory
2. Reference in Markdown:
   ```markdown
   ![Alt text](/images/wrccdc/2024/photo.jpg)
   ```
3. Or in HTML:
   ```html
   <img src="/images/wrccdc/2024/photo.jpg" alt="Description">
   ```

## Placeholder Images

Use https://placeholder.com for temporary images:
```html
<img src="https://via.placeholder.com/400x400" alt="Placeholder">
```
