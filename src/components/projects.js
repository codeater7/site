import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					{/* Project 1 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583153693/Screen_Shot_2020-03-02_at_2.53.30_PM_w8febo.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Full-stack web app</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/codeater7/Survey" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
							<a
								href="https://ancient-hamlet-34656.herokuapp.com/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Button colored>Live Demo</Button>
							</a>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used"> React, Redux, MongoDB, Node, Express. </div>
					</Card>

					{/* Project 2 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583146569/Django_oh60nv.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Python-Django project</CardText>
						<CardActions border className="button-bootstrap">
							<a
								href="https://github.com/codeater7/Django-polling-App"
								rel="noopener noreferrer"
								target="_blank"
							>
								{' '}
								<Button colored>GitHub</Button>{' '}
							</a>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used"> Python/Django. </div>
					</Card>

					{/* Project 3 portfolio */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583230560/Screen_Shot_2020-03-03_at_12.15.44_PM_jy1i7z.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Portfolio</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/codeater7/Portfolio" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used">React, Redux. </div>
					</Card>

					{/* Project 4 API  SHOPPING*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583222023/REST_API_pic_fr6ybw.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used"> Shop: Product & Orders</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/codeater7/Restful-API" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used">Node, Express </div>
					</Card>

					{/* Project 5 Mini-Youtube */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
							
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583313521/Screenshot_2020-03-04_at_11.18.15_bt1ame.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Mini Youtube</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/codeater7/Mini-Youtube" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used">React, Redux </div>
          </Card>
          
          {/* Project 6 Developers API*/}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle
            style={{
              height: '176px',
              background:
                'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583222023/REST_API_pic_fr6ybw.png) center / cover',
            }}
          ></CardTitle>
          <CardText className="text-used"> Developer </CardText>
          <CardActions border className="button-bootstrap">
            <a href="https://github.com/codeater7/DeveloperRecruiter" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
            </a>
            
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
          <div className="Tech-used">Node, Express </div>
		</Card>


		
		{/* Project 6 Developers API*/}
		<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
		<CardTitle
		  style={{
			
			height: '176px',
			background:
			  'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583317642/1_M9le42saJxWlOYyYvhKtPA_oyulax.jpg) center / cover',
		  }}
		></CardTitle>
		<CardText className="text-used">Movie Predictor with Python</CardText>
		<CardActions border className="button-bootstrap">
		  <a href="https://github.com/codeater7/Movie_predictor-with-python" rel="noopener noreferrer" target="_blank">
			<Button colored>GitHub</Button>
		  </a>
		 
		</CardActions>
		<CardMenu style={{ color: '#fff' }}>
		  <IconButton name="share" />
		</CardMenu>
		<div className="Tech-used">Python </div>
	  </Card>


        {/* Project 7 API fetch with Stream */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle
            style={{
              
              height: '176px',
              background:
                'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583169637/Screenshot_2020-03-02_at_15.28.45_vlbqsk.png) center / cover',
            }}
          ></CardTitle>
          <CardText className="text-used">Redux Refresher</CardText>
          <CardActions border className="button-bootstrap">
            <a href="hhttps://github.com/codeater7/BlogPost-Redux" rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
            </a>
           
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
          <div className="Tech-used">React, Redux </div>
        </Card>


					{/* Project 7 API fetch with React & Redux */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
							
								height: '176px',
								background:
									'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">React, Redux API Fetch</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/codeater7/Portfolio" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used">React, Redux </div>
					</Card>

					{/* Project 9: Streaming */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583169625/Screenshot_2020-03-02_at_15.29.54_f7vcmu.png) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Streaming Channel</CardText>
						<CardActions border className="button-bootstrap">
							<a
								href="https://github.com/codeater7/Streaming-Channel"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Button colored>GitHub</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used"> React, Redux </div>
					</Card>

					{/* Project 9 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Github API</CardText>
						<CardActions border className="button-bootstrap">
							<a
								href="https://github.com/codeater7/Github-api-with-React"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Button colored>GitHub</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used">React </div>
					</Card>

					{/* Project 10 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://res.cloudinary.com/dzzbql7sj/image/upload/v1583234328/docker_facebook_share_xbexur.png) center / cover',
							}}
						>
							I
						</CardTitle>
						<CardText className="text-used">Implementing Docker</CardText>
						<CardActions border className="button-bootstrap">
							<a
								href="https://github.com/codeater7/DockerImageUpload"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Button colored>GitHub</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used"> React, Node, Express, Docker. </div>
					</Card>

					{/* Project 11 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								
								height: '176px',
								background:
									'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">Finding Baby-names</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/codeater7/Baby-names" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used">React </div>
					</Card>

					{/* Project 12 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover',
							}}
						></CardTitle>
						<CardText className="text-used">React To-do</CardText>
						<CardActions border className="button-bootstrap">
							<a href="https://github.com/codeater7/React-todo" rel="noopener noreferrer" target="_blank">
								<Button colored>GitHub</Button>
							</a>
							
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
						<div className="Tech-used">React </div>
					</Card>
				</div>
			);
		}
	}
	render() {
		return (
			<div>
				<Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
					<Tab>Projects Using different technologies</Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}
export default Projects;
