import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCol,
	IonContent,
	IonFab,
	IonFabButton,
	IonHeader,
	IonIcon,
	IonImg,
	IonLabel,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

import {
	gridOutline,
	gridSharp,
	layersOutline,
	layersSharp,
	searchOutline,
	searchSharp,
} from 'ionicons/icons';
import './Home.css';
import './SearchPage.tsx';

import { NavButtons } from '../components/NavButton';

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<NavButtons />
					</IonButtons>
					<IonButton slot='end' color='light'>
						<IonBackButton
							defaultHref='SearchPage'
							color='dark'
							text='Search'
							icon=''
						></IonBackButton>
						<IonIcon ios={searchOutline} md={searchSharp} />
					</IonButton>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonCard className='cardMain'>
					<IonImg src='assets/img/FoodMain.jpg' className='myCard'></IonImg>
					<div className='myOverlay'>
						<div>Get your Joule.</div>
						<div>Be happy.</div>
						<div className='card-title2'>Explore</div>
					</div>
				</IonCard>

				<p>
					<span>Search by Type</span>
				</p>

				<IonRow>
					<IonCol>
						<IonCard>
							<IonCardContent>
								<IonRow>
									<img src='assets/img/Beef.jpg' />
								</IonRow>
							</IonCardContent>
							<div className='text'>Beef</div>
						</IonCard>
					</IonCol>

					<IonCol>
						<IonCard>
							<IonCardContent>
								<IonRow>
									<img src='assets/img/Seafood.jpg' />
								</IonRow>
							</IonCardContent>
							<div className='text'>Seafood</div>
						</IonCard>
					</IonCol>

					<IonCol>
						<IonCard>
							<IonCardContent>
								<IonRow>
									<img src='assets/img/Poultry.jpg' />
								</IonRow>
							</IonCardContent>
							<div className='text'>Poultry</div>
						</IonCard>
					</IonCol>
				</IonRow>

				<IonRow>
					<IonCol>
						<IonCard>
							<IonCardContent>
								<IonRow>
									<img src='assets/img/Pork.jpg' />
								</IonRow>
							</IonCardContent>
							<div className='text'>Pork</div>
						</IonCard>
					</IonCol>

					<IonCol>
						<IonCard>
							<IonCardContent>
								<IonRow>
									<img src='assets/img/Lamb.jpg' />
								</IonRow>
							</IonCardContent>
							<div className='text'>Lamb</div>
						</IonCard>
					</IonCol>

					<IonCol>
						<IonCard>
							<IonCardContent>
								<IonRow>
									<img src='assets/img/Game.jpg' />
								</IonRow>
							</IonCardContent>
							<div className='text'>Game</div>
						</IonCard>
					</IonCol>
				</IonRow>

				<IonRow>
					<IonCol>
						<IonCard>
							<IonCardContent>
								<IonRow>
									<img src='assets/img/Vegetables.jpg' />
								</IonRow>
							</IonCardContent>
							<div className='text'>Vegetables</div>
						</IonCard>
					</IonCol>

					<IonCol>
						<IonCard>
							<IonCardContent>
								<IonRow>
									<img src='assets/img/Dessert.jpg' />
								</IonRow>
							</IonCardContent>
							<div className='text'>Dessert</div>
						</IonCard>
					</IonCol>

					<IonCol>
						<IonCard>
							<IonCardContent>
								<IonRow>
									<img src='assets/img/Other.jpg' />
								</IonRow>
							</IonCardContent>
							<div className='text'>Other</div>
						</IonCard>
					</IonCol>
				</IonRow>

				<p>
					<span>Cooking Guides</span>
				</p>

				<IonCard>
					<IonRow>
						<IonCol className='foodMargin'>
							<img src='assets/img/Food1.jpg' className='foodHome' />
						</IonCol>
						<IonCol>
							<h4>Get Started: Basic Guide</h4>
							<IonRow>
								<IonIcon ios={layersOutline} md={layersSharp} />
							</IonRow>
						</IonCol>
					</IonRow>
				</IonCard>

				<IonCard>
					<IonRow>
						<IonCol>
							<img src='assets/img/Food2.jpg' className='foodHome' />
						</IonCol>
						<IonCol>
							<h4>Quick & Easy</h4>
							<IonRow>
								<IonIcon ios={layersOutline} md={layersSharp} />
							</IonRow>
						</IonCol>
					</IonRow>
				</IonCard>

				<IonCard>
					<IonRow>
						<IonCol>
							<img src='assets/img/Food3.jpeg' className='foodHome' />
						</IonCol>
						<IonCol>
							<h4>Cook in a Jar -- No Bag Required</h4>
							<IonRow>
								<IonIcon ios={layersOutline} md={layersSharp} />
							</IonRow>
						</IonCol>
					</IonRow>
				</IonCard>

				<IonFab vertical='bottom' horizontal='end' slot='fixed'>
					<IonFabButton color='light'>
						<IonIcon ios={gridOutline} md={gridSharp} />
					</IonFabButton>
				</IonFab>

				<IonFab
					vertical='bottom'
					horizontal='center'
					slot='fixed'
					className='but'
				>
					<IonFabButton color='light' className='fab'>
						<IonLabel className='huruf'>Search For Joule</IonLabel>
					</IonFabButton>
				</IonFab>
			</IonContent>
		</IonPage>
	);
};

export default Home;
