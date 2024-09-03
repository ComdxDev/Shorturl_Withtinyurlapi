console.log("Test...");

// async function shortenUrl() {
//     const longUrl = document.getElementById('longUrl').value;
//     const accessToken = 'YOUR_BITLY_ACCESS_TOKEN'; // ใส่ access token ของคุณที่นี่
//     const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
//     const resultElement = document.getElementById('result');
  
//     if (!longUrl) {
//       resultElement.textContent = "Please enter a URL.";
//       return;
//     }
  
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${accessToken}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ "long_url": longUrl })
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
  
//       const data = await response.json();
//       resultElement.textContent = `Shortened URL: ${data.link}`;
//     } catch (error) {
//       resultElement.textContent = `Error: ${error.message}`;
//     }
//   }
  
//เทส
async function shortenUrl() {
    const longUrl = document.getElementById('longUrl').value;
    const apiUrl = `https://api.tinyurl.com/create?api_token=pnvkwoerMb7m1Guz5ElIAKHhBAd128jp0dNHnQWF1lIFMycdMxRTVYCz9DY8`;

    if (!longUrl) {
        document.getElementById('result').textContent = 'Please enter a URL.';
        return;
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "url": longUrl })
        });

        if (!response.ok) {
            throw new Error('Failed to shorten URL');
        }

        const data = await response.json();
        document.getElementById('result').textContent = `New URL: ${data.data.tiny_url}`;
       
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your chang url success",
            showConfirmButton: false,
            timer: 1300
          });
    } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    }
}




//   mytoken 

