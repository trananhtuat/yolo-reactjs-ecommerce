import React from 'react'

import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import CheckBox from '../components/CheckBox'

import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'

const Catalog = () => {
    return (
        <Helmet title="Sản phẩm">
            <div className="catalog">
                <div className="catalog__filter">
                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            danh mục sản phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                category.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            màu sắc
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                colors.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            kích cỡ
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                size.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="catalog__content">
                    <Grid
                        col={3}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            productData.getAllProducts().map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.name}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
