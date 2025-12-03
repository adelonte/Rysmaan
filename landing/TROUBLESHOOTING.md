# Troubleshooting Guide - VendorGate Landing Page

## CSS Not Showing / Styles Not Applied

If you're seeing unstyled HTML (no colors, layouts look broken), try these steps:

### 1. Hard Refresh Your Browser
**Most common fix!** Your browser might be caching old assets.

- **Chrome/Firefox (Mac)**: `Cmd + Shift + R`
- **Chrome/Firefox (Windows/Linux)**: `Ctrl + Shift + R`
- **Safari**: `Cmd + Option + R`

### 2. Clear .nuxt Cache
Sometimes the Nuxt build cache gets corrupted:

```bash
cd VendorGate_Landing/landing
rm -rf .nuxt node_modules/.vite
npm run dev
```

### 3. Verify Server is Running
Make sure the dev server is actually running:

```bash
cd VendorGate_Landing/landing
npm run dev
```

You should see:
```
➜ Local:    http://localhost:3001/
# or
➜ Local:    http://localhost:3002/  (if 3001 is taken)
```

### 4. Check Browser Console
Open browser DevTools (F12) and check:

**Console Tab** - Look for errors like:
- `Failed to load module`
- `404 Not Found`
- Any red errors

**Network Tab** - Check if:
- CSS files are loading (filter by "CSS")
- Main JavaScript bundle is loading
- Any 404 errors for assets

### 5. Verify Files Exist
Make sure these files are in place:

```bash
cd VendorGate_Landing/landing
ls -la app/assets/css/main.css
ls -la nuxt.config.ts
ls -la tailwind.config.ts
ls -la app.config.ts
```

All should exist. If `main.css` is missing, create it:

```bash
mkdir -p app/assets/css
cat > app/assets/css/main.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF
```

### 6. Reinstall Dependencies
If nothing else works, reinstall:

```bash
cd VendorGate_Landing/landing
rm -rf node_modules package-lock.json .nuxt
npm install
npm run dev
```

### 7. Check Port
Make sure you're accessing the correct port:

- If server says `Local: http://localhost:3001/`, use that
- If it says `port 3002` or different, use that port instead

### 8. Disable Browser Extensions
Some ad blockers or security extensions can block CSS/JS:

- Try in an Incognito/Private window
- Or temporarily disable browser extensions

## Common Error Messages

### "Cannot find module"
```bash
cd VendorGate_Landing/landing
npm install
```

### "Port already in use"
Kill the process using the port:
```bash
lsof -ti:3001 | xargs kill -9
# or
lsof -ti:3002 | xargs kill -9
```

### "ENOENT: no such file or directory"
You're in the wrong directory. Navigate to:
```bash
cd /path/to/VendorGate_Landing/landing
```

## Still Not Working?

### Option A: Check if it's a browser issue
Try a different browser (Chrome, Firefox, Safari)

### Option B: Check the built HTML
Save the page source (Cmd+S or Ctrl+S) and look for:
- `<style id="nuxt-ui-colors">` - Should have CSS variables
- `<link rel="stylesheet"` - Should have Tailwind CSS
- `class="text-4xl font-bold"` - Classes should be in the HTML

If classes are there but no styling, it's a Tailwind issue.
If classes are missing, it's a rendering issue.

### Option C: Try Production Build
Sometimes dev mode has issues but production works:

```bash
cd VendorGate_Landing/landing
npm run build
npm run preview
```

Then visit the preview URL (usually http://localhost:3000)

## Getting Help

If you're still stuck, provide:
1. Screenshot of the page
2. Browser console errors (F12 → Console tab)
3. Network tab showing failed requests (if any)
4. Output of `npm run dev` in terminal
