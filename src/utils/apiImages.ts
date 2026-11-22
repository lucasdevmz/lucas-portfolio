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

type GalleryImage = {
  src: string
  titleKey: string
}

export const apiImages: GalleryImage[] = [
  {
    src: apiProductsImage,
    titleKey: 'projects.api.gallery.products',
  },
  {
    src: apiCategoriesImage,
    titleKey: 'projects.api.gallery.categories',
  },
  {
    src: apiLoginImage,
    titleKey: 'projects.api.gallery.login',
  },
  {
    src: apiCreateProductImage,
    titleKey: 'projects.api.gallery.createProduct',
  },
]

export const adminImages: GalleryImage[] = [
  {
    src: overviewImage,
    titleKey: 'projects.admin.gallery.overview',
  },
  {
    src: productsImage,
    titleKey: 'projects.admin.gallery.products',
  },
  {
    src: categoriesImage,
    titleKey: 'projects.admin.gallery.categories',
  },
  {
    src: ordersImage,
    titleKey: 'projects.admin.gallery.orders',
  },
  {
    src: orderDetailsImage,
    titleKey: 'projects.admin.gallery.orderDetails',
  },
  {
    src: clientsImage,
    titleKey: 'projects.admin.gallery.clients',
  },
  {
    src: paymentsImage,
    titleKey: 'projects.admin.gallery.payments',
  },
  {
    src: deactivatedProductImage,
    titleKey: 'projects.admin.gallery.deactivatedProduct',
  },
]
