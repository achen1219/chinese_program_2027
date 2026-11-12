# Draw the home-screen icons: a white 考 on the app's green, over a faint 田字格.
#   powershell -File make_icons.ps1   ->  icons\icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png
# Uses System.Drawing because Pillow's and PyMuPDF's native modules are blocked by Application Control here.
Add-Type -AssemblyName System.Drawing

$out = Join-Path $PSScriptRoot 'icons'
New-Item -ItemType Directory -Force $out | Out-Null

function New-Icon([int]$size, [double]$ratio, [string]$name) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.Clear([System.Drawing.Color]::FromArgb(29, 104, 73))

    $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(58, 138, 104)), ([single]($size / 100))
    $inset = [single]($size * 0.12)
    $span = [single]($size - 2 * $inset)
    $mid = [single]($size / 2)
    $g.DrawRectangle($pen, $inset, $inset, $span, $span)
    $g.DrawLine($pen, $mid, $inset, $mid, [single]($size - $inset))
    $g.DrawLine($pen, $inset, $mid, [single]($size - $inset), $mid)

    # Outline the glyph as a path so it can be centred on its real bounds, not the font's line box.
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $family = New-Object System.Drawing.FontFamily 'Microsoft JhengHei'
    $origin = New-Object System.Drawing.PointF 0, 0
    $path.AddString([string][char]0x8003, $family, [int][System.Drawing.FontStyle]::Bold, [single]($size * $ratio), $origin, [System.Drawing.StringFormat]::GenericTypographic)
    $b = $path.GetBounds()
    $m = New-Object System.Drawing.Drawing2D.Matrix
    $m.Translate([single](($size - $b.Width) / 2 - $b.X), [single](($size - $b.Height) / 2 - $b.Y))
    $path.Transform($m)
    $g.FillPath([System.Drawing.Brushes]::White, $path)

    $bmp.Save((Join-Path $out $name), [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose()
}

New-Icon 192 0.66 'icon-192.png'
New-Icon 512 0.66 'icon-512.png'
New-Icon 512 0.50 'icon-maskable-512.png'   # keeps the glyph inside the mask's safe zone
New-Icon 180 0.66 'apple-touch-icon.png'
Write-Output "icons written to $out"
