let responseData;

const push = async () => {
  console.log("Push-Up Challenge");
  try {
    const response = await fetch("https://freaky-api.vercel.app/Miniproject/challenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Type: "Push-Up Challenge",
      }),
    });
    
    const data = await response.json();
    responseData = data.data;
    
    generateTableRows();
  } catch (error) {
    console.log(error);
  }
};

const pull = async () => {
  console.log("Pull-Up Challenge");
  try {
    const response = await fetch("https://freaky-api.vercel.app/Miniproject/challenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Type: "Pull-Up Challenge",
      }),
    });
    
    const data = await response.json();
    responseData = data.data;
    
    generateTableRows();
  } catch (error) {
    console.log(error);
  }
};

const partner = async () => {
  console.log("Partner Challenge");
  try {
    const response = await fetch("https://freaky-api.vercel.app/Miniproject/challenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Type: "Partner Challenge",
      }),
    });
    
    const data = await response.json();
    responseData = data.data;
    
    generateTableRows();
  } catch (error) {
    console.log(error);
  }
};

function generateTableRows() {
    const newWindow = window.open("popup.html", "_blank", "width=600,height=400");
    if (!newWindow) {
      console.error("Failed to open new window");
      return;
    }
  
    newWindow.addEventListener("load", () => {
      const newDocument = newWindow.document.implementation.createHTMLDocument();
      const table = newDocument.createElement("table");
      table.id = "data-table";
      table.style.borderCollapse = "collapse";
      table.style.width = "100%";
  
      const thead = newDocument.createElement("thead");
      const headerRow = newDocument.createElement("tr");
      const headers = ["Ex_No", "Ex_Name", "Reps/Timer", "Type"];
  
      headers.forEach(headerText => {
        const th = newDocument.createElement("th");
        th.textContent = headerText;
        th.style.border = "2px solid #ddd";
        th.style.padding = "8px";
        th.style.textAlign = "left";
        th.style.backgroundColor = "#f2f2f2";
        headerRow.appendChild(th);
      });
  
      thead.appendChild(headerRow);
      table.appendChild(thead);
  
      const tbody = newDocument.createElement("tbody");
      responseData.forEach(data => {
        const row = newDocument.createElement("tr");
        Object.entries(data).forEach(([key, value]) => {
          if (key !== "_id") {
            const cell = newDocument.createElement("td");
            cell.textContent = value;
            cell.style.border = "1px solid #ddd";
            cell.style.padding = "8px";
            cell.style.textAlign = "left";
            row.appendChild(cell);
          }
        });
        tbody.appendChild(row);
      });
  
      table.appendChild(tbody);
      newDocument.body.appendChild(table);
  
      const style = newDocument.createElement("style");
      style.innerHTML = `
        .body{
            background-color: blue;
        }
        #data-table {
          /* Add your table styling here */
        }
        #data-table th {
          /* Add your table header styling here */
        }
        #data-table td {
          /* Add your table cell styling here */
        }
      `;
      newDocument.head.appendChild(style);
  
      newWindow.document.body.innerHTML = newDocument.documentElement.outerHTML;
    });
  }
  