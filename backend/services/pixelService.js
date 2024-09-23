function generatePixel() {
  return `
    <script>
      (function() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://your-backend-url/api/leads/collect', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('IP collected');
          }
        };
        xhr.send(JSON.stringify({ ip: '${getIP()}' }));
      })();

      function getIP() {
        // In a real scenario, you'd use a service to get the IP
        return '127.0.0.1';
      }
    </script>
  `;
}

module.exports = { generatePixel };