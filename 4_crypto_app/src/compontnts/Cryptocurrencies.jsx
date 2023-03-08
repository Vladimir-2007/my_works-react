import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'


const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100
  // console.log('Count====>', count)
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count)

  const [cryptos, setCryptos] = useState([])

  const [searchTerm, setSearchTerm] = useState('')
  // console.log('Cryptos====>', cryptos)

  useEffect(() => {

    // setCryptos(cryptoList?.data?.coins)

    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase()
      .includes(searchTerm.toLowerCase()))

    setCryptos(filteredData)

  }, [cryptoList, searchTerm])

  if (isFetching) return 'Loading...'

  return (
    <>
      { !simplified && <div className="search-crypto">
        <Input placeholder="Search Cryptocurrency" onChange={ (e) => setSearchTerm(e.target.value) }/>
      </div> }

      <Row gutter={ [22, 22] } className="crypto-card-container">
        { cryptos?.map((currensy) => (
          <Col xs={ 24 } sm={ 12 } lg={ 6 } className="crypto-card" key={ currensy.id }>
            <Link to={ `/crypto/${ currensy.uuid }` }>
              <Card
                hoverable
                title={ `${ currensy.rank }. ${ currensy.name }` }
                extra={ <img className="crypto-image" src={ currensy.iconUrl }/> }
              >
                <p>Price: { millify(currensy.price) }</p>
                <p>Market Cap: { millify(currensy.marketCap) }</p>
                <p>Daily Change: { millify(currensy.change) }%</p>
              </Card>
            </Link>

          </Col>
        )) }
      </Row>
    </>
  )
}

export default Cryptocurrencies