import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Text, Title } = Typography
const { Option } = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')

  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
  // console.log(cryptoNews)
  const { data } = useGetCryptosQuery(100)

  if (!cryptoNews?.value) return 'Loading...'

  return (
    <Row gutter={ [22, 22] }>
      { !simplified && (
        <Col span={ 24 }>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={ (value) => setNewsCategory(value) }
            filterOption={ (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            { data?.data?.coins?.map((currency) => <Option value={ currency.name }>{ currency.name }</Option>) }
          </Select>
        </Col>
      ) }

      { cryptoNews.value.map((news, i) => (
        <Col xs={ 24 } sm={ 12 } lg={ 8 } key={ i } style={ { display: 'flex', flexDirection: 'row' } }>
          <Card
            hoverable
            className="news-card"
          >
            <a href={ news.url } target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={ 4 }>
                  { news.name }
                </Title>
                <img src={ news?.image?.thumbnail?.contentUrl || demoImage } alt="news"
                     style={ { maxWidth: '200px', maxHeight: '100px' } }/>
              </div>
              <p>
                { news.description > 1000
                  ? `${ news.description.substring(0, 100) } : ...`
                  : news.description }
              </p>
              <div className="provider-container">
                <div>
                  <Avatar src={ news.provider[0]?.image?.thumbnail?.contentUrl || demoImage } alt="news"/>
                  <Text className="provider-name">
                    { news.provider[0]?.name }
                  </Text>
                </div>
                <Text> { moment(news.datePublished).startOf('ss').fromNow() }</Text>
              </div>

            </a>
          </Card>
        </Col>
      ))
      }
    </Row>
  )
}

export default News