import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const inputDir = './src/images';
const outputDir = './src/images/webp';

async function convertToWebP() {
  try {
    const files = await readdir(inputDir);
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg') || 
      file.toLowerCase().endsWith('.png')
    );

    for (const file of imageFiles) {
      const inputPath = join(inputDir, file);
      const outputPath = join(outputDir, `${file.split('.')[0]}.webp`);

      // Process hero images (reddoor.jpg)
      if (file.includes('reddoor')) {
        await sharp(inputPath)
          .webp({ quality: 85 })
          .resize(1920, null, { withoutEnlargement: true })
          .toFile(outputPath);
        continue;
      }

      // Process regular images
      await sharp(inputPath)
        .webp({ quality: 80 })
        .resize(800, null, { withoutEnlargement: true })
        .toFile(outputPath);

      // Create thumbnail version
      await sharp(inputPath)
        .webp({ quality: 60 })
        .resize(400, null, { withoutEnlargement: true })
        .toFile(join(outputDir, `${file.split('.')[0]}-thumb.webp`));
    }

    console.log('All images converted successfully!');
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

convertToWebP();
