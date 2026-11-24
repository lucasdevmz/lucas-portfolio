import categoriesImage from '../assets/projects/categories.png'
import clientsImage from '../assets/projects/clients.png'
import deactivatedProductImage from '../assets/projects/diactiv-product.png'
import orderDetailsImage from '../assets/projects/order-details.png'
import ordersImage from '../assets/projects/orders.png'
import paymentsImage from '../assets/projects/payments.png'
import productsImage from '../assets/projects/products.png'
import apiCategoriesImage from '../assets/projects/ecomba-api/get-categories.png'
import apiLoginImage from '../assets/projects/ecomba-api/post-auth-login.png'
import apiCreateProductImage from '../assets/projects/ecomba-api/post-create-products.png'
import apiProductsImage from '../assets/projects/ecomba-api/get-products.png'
import overviewImage from '../assets/projects/review.png'

import digitalStoreCategoriesImage from '../assets/projects/digital-store/categories.png'
import digitalStoreProductImage from '../assets/projects/digital-store/detail-page.png'
import digitalStoreCartImage from '../assets/projects/digital-store/cart.png'
import digitalStoreCheckoutImage from '../assets/projects/digital-store/checout-page.png'
import digitalStoreAdminImage from '../assets/projects/digital-store/general-view.png'
import digitalStoreAdminProductsImage from '../assets/projects/digital-store/admin-product.png'
import digitalStoreAdminOrdersImage from '../assets/projects/digital-store/order.png'

type GalleryImage = {
  src: string
  titleKey: string
}

export const apiImages: GalleryImage[] = [
  { src: apiProductsImage, titleKey: 'projects.api.gallery.products' },
  { src: apiCategoriesImage, titleKey: 'projects.api.gallery.categories' },
  { src: apiLoginImage, titleKey: 'projects.api.gallery.login' },
  { src: apiCreateProductImage, titleKey: 'projects.api.gallery.createProduct' },
]

export const adminImages: GalleryImage[] = [
  { src: overviewImage, titleKey: 'projects.admin.gallery.overview' },
  { src: productsImage, titleKey: 'projects.admin.gallery.products' },
  { src: categoriesImage, titleKey: 'projects.admin.gallery.categories' },
  { src: ordersImage, titleKey: 'projects.admin.gallery.orders' },
  { src: orderDetailsImage, titleKey: 'projects.admin.gallery.orderDetails' },
  { src: clientsImage, titleKey: 'projects.admin.gallery.clients' },
  { src: paymentsImage, titleKey: 'projects.admin.gallery.payments' },
  { src: deactivatedProductImage, titleKey: 'projects.admin.gallery.deactivatedProduct' },
]

export const digitalStoreImages: GalleryImage[] = [
  { src: digitalStoreCategoriesImage, titleKey: 'projects.digitalStore.gallery.categories' },
  { src: digitalStoreProductImage, titleKey: 'projects.digitalStore.gallery.product' },
  { src: digitalStoreCartImage, titleKey: 'projects.digitalStore.gallery.cart' },
  { src: digitalStoreCheckoutImage, titleKey: 'projects.digitalStore.gallery.checkout' },
  { src: digitalStoreAdminImage, titleKey: 'projects.digitalStore.gallery.admin' },
  { src: digitalStoreAdminProductsImage, titleKey: 'projects.digitalStore.gallery.adminProducts' },
  { src: digitalStoreAdminOrdersImage, titleKey: 'projects.digitalStore.gallery.adminOrders' },
]
