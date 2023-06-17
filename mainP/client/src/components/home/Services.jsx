import React from 'react'

import '../Styles/Services.css'

const Services = () => {
  return (
    <>
    <div className="services-section">

        <div className="Services mt-12" id= "Services">

        <div className="intro  flex items-center justify-center text-3xl ">
          <p>
            Services We provide
          </p>
        </div>

        
        <div className="row mt-9">
            <div className="btn-1 col-lg-6">
            <p className="text-2xl  flex justify-center">
              For Merchant
            </p>
            <ul  className = "merchant-services-list">
              <li className="list-items">
              Online Ordering: Enable merchants to offer convenient online ordering options for their customers.
              </li>
              <li className="list-items">
              Token-Based Queue Management: Implement a system that eliminates physical queues by generating unique tokens for orders.
              </li>
              <li className="list-items">
              Order Tracking and Updates: Provide real-time order tracking and updates for both merchants and customers.
              </li>
              <li className="list-items">
              Analytics and Reporting: Offer comprehensive analytics and reporting features for merchants to gain insights into their business.
              </li>
              <li className="list-items">
              Menu Management: Enable easy management of menus, including adding, removing, and updating items.
              </li>
            </ul>

            
            </div>
            <div className="btn-2 col-lg-6">
            <p className="text-2xl  flex justify-center">
              For Customers
            </p>
            <ul  className = "customer-services-list">
              <li className="list-items">
              Convenient Online Ordering: Allow customers to browse menus, customize orders, and place them online.
              </li>
              <li className="list-items">
              Order Tracking and Notifications: Provide real-time updates on order status and notifications for customers.
              </li>
              <li className="list-items">
              Seamless User Experience: Focus on creating a user-friendly interface for an effortless ordering process.
              </li>
              <li className="list-items">
              Personalization and Preferences: Enable customers to customize their orders based on their preferences
              </li>
              <li className="list-items">
              Order History and Favorites: Offer features to view order history and reorder favorite items.
              </li>
            </ul>

            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Services
