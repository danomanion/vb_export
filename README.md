# Export VideoBloom Video Files
A Node.js based file exporter for the [VideoBloom Platform](VideoBloom.com).

## Why
Many of us love the [VideoBloom.com](http://videobloom.com) service. However, if you are like me and the original [PHP author](https://twitter.com/aaronott) of this script, we also wouldn't mind keeping backups of our files locally as well. This script makes it possible to do this.

## Usage
Simple, get your `vb_id` from the [RSS link](https://my.videobloom.com/videos) located at the bottom of the Video Management Page on the VideoBloom Platform and replace it in the export file.

## Run
1. `npm install`
2. `node app.js [vb_id]`
  - Note: the `vb_id` can also be edited in the `app.js` manually if desired.

The files will be placed into a "videos" directory in the current directory. This script works by grabbing the RSS feed from VB and pulling down the video file associated with each video.

## @Todo
- [ ] Fix timeout issue with my feed, I presume others might have better luck with less videos? 
- [ ] Add Webpack implementation.
- [ ] Add a throbber for the waits. [This looks like a good solution.](https://www.npmjs.com/package/cli-spinner)
- [ ] Create Mocha Tests.
- [ ] Add download directory option to CLI interface.
  - IE: `node app.js [vb_id] [vb_download_directory]`

**Special thanks to [Aaron Ott](https://twitter.com/aaronott) for writing the original implementation of this script located [here](https://github.com/aaronott/vb_export).**
- Throw some love his way via a nice cup of coffee ☕️ or something along those lines.
