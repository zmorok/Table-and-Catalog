import React from 'react'
import Catalog from './Catalog'
import SortTable from './SortTable'
import './styles.css'

const products = [
	{
		id: 1,
		name: 'Робот-пылесос Xiaomi',
		price: 1500,
		quantity: 10,
		image: 'images/product1.jpg',
		description: 'Компактный робот-пылесос для повседневной уборки.',
		isNew: true,
		discount: 10,
	},
	{
		id: 2,
		name: 'Смартфон Samsung',
		price: 1099,
		quantity: 15,
		image: 'images/product2.jpg',
		description: 'Популярный смартфон с качественной камерой.',
		isNew: false,
		discount: 0,
	},
	{
		id: 3,
		name: 'Телевизор LG',
		price: 2399,
		quantity: 5,
		image: 'images/product3.jpg',
		description: 'Широкий экран с высоким разрешением для удобного просмотра.',
		isNew: true,
		discount: 15,
	},
	{
		id: 4,
		name: 'Наушники Sony',
		price: 999,
		quantity: 20,
		image: 'images/product4.jpg',
		description: 'Качественный звук и удобство использования.',
		isNew: false,
		discount: 0,
	},
	{
		id: 5,
		name: 'Кофеварка DeLonghi',
		price: 509,
		quantity: 8,
		image: 'images/product5.jpg',
		description: 'Идеальное решение для приготовления ароматного кофе.',
		isNew: false,
		discount: 15,
	},
	{
		id: 6,
		name: 'Микроволновка Panasonic',
		price: 483,
		quantity: 12,
		image: 'images/product6.jpg',
		description: 'Быстро и удобно разогревайте пищу с помощью этой печи.',
		isNew: true,
		discount: 0,
	},
	{
		id: 7,
		name: 'Фотоаппарат Canon',
		price: 700,
		quantity: 6,
		image: 'images/product7.jpg',
		description: 'Отличное качество изображения и простота использования.',
		isNew: false,
		discount: 0,
	},
	{
		id: 8,
		name: 'Утюг Philips',
		price: 89,
		quantity: 18,
		image: 'images/product8.jpg',
		description: 'Эффективно и быстро разглаживает даже самые сложные складки.',
		isNew: false,
		discount: 22,
	},
	{
		id: 9,
		name: 'Миксер Bosch',
		price: 219,
		quantity: 14,
		image: 'images/product9.jpg',
		description: 'Идеальное решение для приготовления кулинарных шедевров.',
		isNew: true,
		discount: 0,
	},
	{
		id: 10,
		name: 'Пылесос Dyson',
		price: 400,
		quantity: 9,
		image: 'images/product10.jpg',
		description: 'Мощный и удобный в использовании пылесос.',
		isNew: false,
		discount: 0,
	},
	{
		id: 11,
		name: 'Холодильник Samsung',
		price: 3099,
		quantity: 7,
		image: 'images/product11.jpg',
		description: 'Просторный и надежный холодильник для вашей кухни.',
		isNew: true,
		discount: 15,
	},
	{
		id: 12,
		name: 'Тостер Philips',
		price: 139,
		quantity: 20,
		image: 'images/product12.jpg',
		description: 'Приготовьте вкусные и хрустящие тосты в несколько минут.',
		isNew: false,
		discount: 0,
	},
	{
		id: 13,
		name: 'Компьютерный стол IKEA',
		price: 5324,
		quantity: 11,
		image: 'images/product13.jpg',
		description: 'Удобный и функциональный компьютерный стол для вашего дома.',
		isNew: true,
		discount: 7,
	},
	{
		id: 14,
		name: 'Блендер Moulinex',
		price: 259,
		quantity: 16,
		image: 'images/product14.jpg',
		description: 'Сделайте вкусные смузи и коктейли с помощью этого блендера.',
		isNew: false,
		discount: 20,
	},
	{
		id: 15,
		name: 'Кофемолка Bosch',
		price: 109,
		quantity: 25,
		image: 'images/product15.jpg',
		description:
			'Идеальное решение для приготовления свежего кофе каждый день.',
		isNew: false,
		discount: 25,
	},
]

function App() {
	return (
		<div>
			<SortTable products={products} />
			<Catalog products={products} />
		</div>
	)
}

export default App
