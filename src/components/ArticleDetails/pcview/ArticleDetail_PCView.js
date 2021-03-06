import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function ArticleDetail_PCView() {
    return (
		<div>
			<Card>
				<Row>
					<Col sm={6} xs={12} lg={4}>
						<CardImg 
							className='img-responsive'
							top 
							src={article.media[0]['media-metadata'][4]} 
							alt="airticleImage" 
						/>
					</Col>
					<Col sm={6} xs={12} lg={8}>
						<CardBody>
							<CardTitle>{article.title}</CardTitle>
							<CardText>{article.abstract}</CardText>
							<a href={article.url} target="_blank" rel="noopener noreferrer">
								<CardText className="continue-link">
									Continue Reading...
									<i className="fa fa-chevron-right img-responsive"></i>
								</CardText>
							</a>
							<CardText className="detail-small-text">
								<small className="text-muted left-detail">
									{article.byline}
								</small>
								<small className="text-muted right-detail">
									{article.published_date}
								</small>
							</CardText>	
						</CardBody>
						<div className="prev-next">
							{articleIndex >= 1 &&
								<Link 
									className="prev-link"
									to={`/${props.articles[articleIndex - 1].id}`}
								>
									<i className="fa fa-chevron-left prev-next"></i>
									Previous Article
								</Link>
							}
							{articleIndex < props.articles.length - 1 &&
								<Link 
									to={`/${props.articles[articleIndex + 1].id}`}
									className="next-link"
								>
									Next Article
									<i className="fa fa-chevron-right prev-next"></i>
								</Link>
							}
						</div>
					</Col>
				</Row>
			</Card>
		</div>
    )
}
