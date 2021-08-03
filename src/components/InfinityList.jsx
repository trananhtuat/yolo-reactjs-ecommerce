import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Grid from './Grid'
import ProductCard from './ProductCard'

const InfinityList = props => {

    const listRef = useRef(null)

    const perLoad = 6

    const [load, setLoad] = useState(true)
    const [index, setIndex] = useState(0)

    const getItems = (count, page) => {
        console.log(page)
        const start = count * page
        const end = start + count
        return props.data.slice(start, end)
    }

    const [data, setData] = useState([])

    useEffect(() => {
        console.log('setData')
        setData(props.data.slice(0, perLoad))
        setIndex(1)
    }, [props.data, perLoad])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 200) {
                setLoad(true)
            }
        })
    }, [listRef, data, perLoad, index])

    useEffect(() => {
        const getMoreItems = (page) => {

            const pages = Math.floor(props.data.length / perLoad)
            const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1

            if (load && page <= maxIndex) {
                console.log('getMoreItems ===')
                const start = perLoad * page
                const end = start + perLoad
                setData(data.concat(props.data.slice(start, end)))
                setIndex(index + 1)
            }
        }
        getMoreItems(index)
        setLoad(false)
    }, [load, index, data, props.data])

    return (
        <div ref={listRef}>
            {
                console.log(props.data)
            }
            <Grid
                col={3}
                mdCol={2}
                smCol={1}
                gap={20}
            >
                {
                    data.map((item, index) => (
                        <ProductCard
                            key={index}
                            img01={item.image01}
                            img02={item.image02}
                            name={item.title}
                            price={Number(item.price)}
                            slug={item.slug}
                        />
                    ))
                }
            </Grid>
        </div>
    )
}

InfinityList.propTypes = {
    data: PropTypes.array.isRequired
}

export default InfinityList
