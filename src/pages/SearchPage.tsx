import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCol,
	IonContent,
	IonHeader,
	IonIcon,
	IonImg,
	IonPage,
	IonRow,
	IonSearchbar,
	IonSegment,
	IonSegmentButton,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

import {
	albumsOutline,
	albumsSharp,
	layersOutline,
	layersSharp,
	searchOutline,
	searchSharp,
} from 'ionicons/icons';

import './SearchPage.css';
import './Home.css';

const SearchPage: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButton slot='end' color='light'>
						<IonBackButton
							defaultHref='home'
							color='dark'
							icon=''
							text='Cancel'
						></IonBackButton>
					</IonButton>
					<IonSearchbar></IonSearchbar>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonSegment>
					<IonSegmentButton>All</IonSegmentButton>
					<IonSegmentButton>Joule App</IonSegmentButton>
					<IonSegmentButton>ChefSteps.com</IonSegmentButton>
				</IonSegment>
				<div className='bg'>
					<div className='sub'>Visual Doneness Guides</div>

					<IonCard>
						<IonRow>
							<IonCol>
								<img src='assets/img/Food4.jpg' className='food' />
							</IonCol>
							<IonCol>
								<h4>Ultimate Food</h4>
								<h6>VISUAL DONENESS GUIDES</h6>
							</IonCol>
						</IonRow>
					</IonCard>

					<IonCard>
						<IonRow>
							<IonCol>
								<img src='assets/img/Food5.jpg' className='food' />
							</IonCol>
							<IonCol>
								<h4>Ultimate Meat</h4>
								<h6>VISUAL DONENESS GUIDES</h6>
							</IonCol>
						</IonRow>
					</IonCard>

					<IonCard>
						<IonRow>
							<IonCol>
								<img src='assets/img/Food6.jpg' className='food' />
							</IonCol>
							<IonCol>
								<h4>Ultimate Shrimp</h4>
								<h6>VISUAL DONENESS GUIDES</h6>
							</IonCol>
						</IonRow>
					</IonCard>

					<IonCard>
						<IonRow>
							<IonCol>
								<img src='assets/img/Food6.jpg' className='food' />
							</IonCol>
							<IonCol>
								<h4>Ultimate Shrimp</h4>
								<h6>VISUAL DONENESS GUIDES</h6>
							</IonCol>
						</IonRow>
					</IonCard>

					<IonCard>
						<IonRow>
							<IonCol>
								<img src='assets/img/Food6.jpg' className='food' />
							</IonCol>
							<IonCol>
								<h4>Ultimate Shrimp</h4>
								<h6>VISUAL DONENESS GUIDES</h6>
							</IonCol>
						</IonRow>
					</IonCard>

					<IonCard>
						<IonRow>
							<IonCol>
								<img src='assets/img/Food6.jpg' className='food' />
							</IonCol>
							<IonCol>
								<h4>Ultimate Shrimp</h4>
								<h6>VISUAL DONENESS GUIDES</h6>
							</IonCol>
						</IonRow>
					</IonCard>

					<IonCard>
						<IonRow>
							<IonCol>
								<img src='assets/img/Food6.jpg' className='food' />
							</IonCol>
							<IonCol>
								<h4>Ultimate Shrimp</h4>
								<h6>VISUAL DONENESS GUIDES</h6>
							</IonCol>
						</IonRow>
					</IonCard>

					<IonCard>
						<IonRow>
							<IonCol>
								<img src='assets/img/Food6.jpg' className='food' />
							</IonCol>
							<IonCol>
								<h4>Ultimate Shrimp</h4>
								<h6>VISUAL DONENESS GUIDES</h6>
							</IonCol>
						</IonRow>
					</IonCard>

					<IonCard>
						<IonRow>
							<IonCol>
								<img src='assets/img/Food6.jpg' className='food' />
							</IonCol>
							<IonCol>
								<h4>Ultimate Shrimp</h4>
								<h6>VISUAL DONENESS GUIDES</h6>
							</IonCol>
						</IonRow>
					</IonCard>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default SearchPage;
