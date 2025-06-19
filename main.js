window.addEventListener('DOMContentLoaded', () => {
	// Performance Chart
	const performanceCtx = document.getElementById('performanceChart')
	if (performanceCtx) {
		new Chart(performanceCtx.getContext('2d'), {
			type: 'bar',
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
				datasets: [
					{
						label: 'Average GPA',
						data: [3.2, 3.4, 3.5, 3.3, 3.6, 3.7, 3.8],
						backgroundColor: 'rgba(123, 104, 238, 0.6)',
						borderColor: 'rgba(123, 104, 238, 1)',
						borderWidth: 2,
						borderRadius: 8,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
				scales: {
					x: {
						grid: {
							display: false,
						},
						ticks: {
							color: '#94A3B8',
						},
					},
					y: {
						beginAtZero: true,
						grid: {
							color: 'rgba(255, 255, 255, 0.05)',
						},
						ticks: {
							color: '#94A3B8',
						},
					},
				},
			},
		})
	}

	// Department Chart
	const departmentCtx = document.getElementById('departmentChart')
	if (departmentCtx) {
		new Chart(departmentCtx.getContext('2d'), {
			type: 'polarArea',
			data: {
				labels: ['Engineering', 'Business', 'Sciences', 'Arts', 'Medicine'],
				datasets: [
					{
						data: [35, 25, 20, 15, 5],
						backgroundColor: [
							'rgba(123, 104, 238, 0.6)',
							'rgba(0, 206, 209, 0.6)',
							'rgba(255, 107, 107, 0.6)',
							'rgba(16, 185, 129, 0.6)',
							'rgba(245, 158, 11, 0.6)',
						],
						borderColor: '#0F1624',
						borderWidth: 2,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						position: 'bottom',
						labels: {
							color: '#94A3B8',
							padding: 20,
							font: {
								size: 12,
							},
						},
					},
				},
				scales: {
					r: {
						grid: {
							color: 'rgba(255, 255, 255, 0.05)',
						},
						ticks: {
							display: false,
						},
					},
				},
			},
		})
	}
})
