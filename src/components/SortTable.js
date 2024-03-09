import React, { useState } from 'react'

const SortTable = ({ products }) => {
	const [sortBy, setSortBy] = useState(null)
	const [sortOrder, setSortOrder] = useState('asc')

	const toggleSortOrder = () => {
		setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
	}

	const sortProducts = field => {
		if (sortBy === field) {
			toggleSortOrder()
		} else {
			setSortBy(field)
			setSortOrder('asc')
		}
	}

	const sortedProducts = () => {
		if (!sortBy) {
			return products
		}
		return products.slice().sort((a, b) => {
			if (sortOrder === 'asc') {
				return a[sortBy] > b[sortBy] ? 1 : -1
			} else {
				return a[sortBy] < b[sortBy] ? 1 : -1
			}
		})
	}

	return (
		<table>
			<thead>
				<tr>
					<th onClick={() => sortProducts('name')}>Наименование</th>
					<th onClick={() => sortProducts('price')}>Стоимость</th>
					<th onClick={() => sortProducts('quantity')}>Количество</th>
					<th onClick={() => sortProducts('discount')}>Скидка</th>
				</tr>
			</thead>
			<tbody>
				{sortedProducts().map((product, index) => (
					<tr key={index}>
						<td>{product.name}</td>
						<td>{product.price}</td>
						<td>{product.quantity}</td>
						<td>{product.discount}%</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default SortTable
