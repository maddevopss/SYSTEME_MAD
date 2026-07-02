# Convertit tous les fichiers .docx du dossier courant en .md
# Les images sont extraites dans un dossier /media par document

$files = Get-ChildItem -Path . -Filter *.docx

if ($files.Count -eq 0) {
    Write-Host "Aucun fichier .docx trouvé dans ce dossier."
    exit
}

foreach ($file in $files) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    $outputFile = "$baseName.md"
    $mediaFolder = "$baseName-media"

    Write-Host "Conversion : $($file.Name) -> $outputFile"

    pandoc "$($file.FullName)" `
        -f docx `
        -t markdown `
        --extract-media="$mediaFolder" `
        -o "$outputFile"
}

Write-Host "Conversion terminée."


# Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
# .\convert-docx-to-md.ps1