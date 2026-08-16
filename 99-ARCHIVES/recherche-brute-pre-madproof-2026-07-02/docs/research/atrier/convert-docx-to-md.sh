#!/bin/bash

for file in *.docx; do
  [ -e "$file" ] || continue

  base="${file%.docx}"
  echo "Conversion : $file -> $base.md"

  pandoc "$file" \
    -f docx \
    -t markdown \
    --extract-media="$base-media" \
    -o "$base.md"
done

echo "Conversion terminée."


# chmod +x convert-docx-to-md.sh
# ./convert-docx-to-md.sh