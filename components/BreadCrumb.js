import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

  import { ChevronRightIcon } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    return (
        <>
        <style>
        {`
          body {
            background: url('https://st.depositphotos.com/4514073/59538/i/450/depositphotos_595386334-stock-photo-set-cosmetic-skin-care-products.jpg') no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            padding: 0;
            height: 100vh;
          }

        `}
      </style>
        <div className=' relative left-52 bgGrey'>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='black' />}>
                <BreadcrumbItem>
                    <Link to='/'>Home</Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link to='/'>Products</Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <Link to='#' className='  whitespace-nowrap text-sm'>{props.name}</Link>
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
        </>
    )
}

export default BreadCrumb