const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const download = require('download-file');

let vb_id = process.argv[2] ? process.argv[2] : "";
let vb_path = `https://my.videobloom.com/feed/${vb_id}/rss`;
let parser = new Parser();
let download_directory = "./videos";
let download_options = {
  directory: download_directory,
  filename: ""
};

(async () => {
  let feed = await parser.parseURL(vb_path);

  // If no vb_id is supplied, inform user that they are getting demo videos.
  if (vb_id == "") {
    console.log("Downloading VideoBloom Default/Demo Videos.");
  };

  feed.items.forEach(function(url) {
    if (url.link.startsWith("http")) {

      download_options.filename = pretty_filename(url.title, url.link);

      download(url.link, download_options, function(err) {
          if (err) throw err;
          console.log(`Downloading ${pretty_filename(url.title, url.link)} ...`);
      });
    } else {
      console.log(`Sorry VideoBloom provided an invalid file.`)
    }
  });
})();

// Return nicer looking filenames then you would get with `link` alone.
// Check if file extension exists, if not add it.
function pretty_filename(title, link) {
  if (title.split('.').pop() == link.split('.').pop()) {
    return title;
  } else {
    return `${title}.${link.split('.').pop()}`;
  }
}
