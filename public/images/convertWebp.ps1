param([Parameter(Mandatory=$true)][string]$InputFile)

if (-not (Test-Path $InputFile)) { Write-Error "Input file not found: $InputFile"; exit 1 }

$baseName = [System.IO.Path]::GetFileNameWithoutExtension($InputFile)
$dir = [System.IO.Path]::GetDirectoryName($InputFile)
$outputFile = if ($dir) { Join-Path $dir "$baseName.webp" } else { "$baseName.webp" }

ffmpeg -y -i "$InputFile" -c:v libwebp -quality 80 "$outputFile"
