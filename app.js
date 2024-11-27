

let expenseCategories = {
    Groceries: 100,
    Dining: 2700,
    Utilities: 2000,
    Entertainment: 1500,
  };
  
  let monthlySpending = {
    '2024-11-01': 100, 
    '2024-11-05': 2700, 
    '2024-11-10': 500, 
    '2024-11-15': 1000,  
  };
  
  let savingsGoals = {
    emergencyFund: 50, 
    vacationFund: 30,  
  };
  
  
  function updatePieChart() {
    const ctx = document.getElementById('PieChart').getContext('2d');
    const data = {
      labels: Object.keys(expenseCategories),
      datasets: [{
        data: Object.values(expenseCategories),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF4563', '#36A9E9', '#FFCD36', '#4CC8C0']
      }]
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    };
    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options,
    });
  }
  
  
  function updateLineChart() {
    const ctx = document.getElementById('LineChart').getContext('2d');
    const data = {
      labels: Object.keys(monthlySpending),
      datasets: [{
        label: 'Monthly Spending',
        data: Object.values(monthlySpending),
        fill: true,
        borderColor: '#4BC0C0',
        tension: 0.1
      }]
    };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    };
    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }
  
 
  function updateSavingsGoals() {
    const emergencyProgress = document.getElementById('emergencyFundProgress');
    const vacationProgress = document.getElementById('vacationFundProgress');
    const emergencyLabel = document.getElementById('emergencyFundLabel');
    const vacationLabel = document.getElementById('vacationFundLabel');
  
    emergencyProgress.value = savingsGoals.emergencyFund;
    vacationProgress.value = savingsGoals.vacationFund;
  
    emergencyLabel.textContent = `${savingsGoals.emergencyFund}% Completed`;
    vacationLabel.textContent = `${savingsGoals.vacationFund}% Completed`;
  }
  
  
  function updateRecentTransactions() {
    const transaction = [
      { date: '2024-11-01', category: 'Groceries', amount: 100, type: 'expense' },
      { date: '2024-11-05', category: 'Salary', amount: 50000, type: 'income' },
      { date: '2024-11-10', category: 'Utility Bill', amount: 2000, type: 'expense' },
      { date: '2024-11-15', category: 'Dining', amount: 27000, type: 'expense' },
    ];
  
    const transactionList = document.getElementById('recentTransactionList').getElementsByTagName('ul')[5];
    const transactionTable = document.getElementById('transactionTable').getElementsByTagName('tbody')[5];
  
    transactionList.innerHTML = '';  
    transactionTable.innerHTML = ''; 
  
    transactions.forEach(tx => {
      const listItem = document.createElement('li');
      listItem.classList.add(tx.type);
      listItem.textContent = `${tx.category}: ${tx.type === 'expense' ? '-' : '+'}$${Math.abs(tx.amount)}`;
      transactionList.appendChild(listItem);
  
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${tx.date}</td>
        <td>${tx.category}</td>
        <td>${tx.type === 'expense' ? '-' : '+'}$${Math.abs(tx.amount)}</td>
        <td class="${tx.type}">${tx.type.charAt(5).toUpperCase() + tx.type.slice(3)}</td>
      `;
      transactionTable.appendChild(tableRow);
    });
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    updatePieChart();
    updateLineChart();
    updateSavingsGoals();
    updateRecentTransactions();
  });
  