import {
	IonMenu,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonMenuToggle,
	IonItem,
	IonLabel,
	IonIcon,
} from '@ionic/react';
import React from 'react';

import './Menu.css';

import {
	homeOutline,
	homeSharp,
	helpCircleOutline,
	helpCircleSharp,
	settingsOutline,
	settingsSharp,
	discOutline,
	discSharp,
} from 'ionicons/icons';

export const Menu = () => {
	return (
		<IonMenu side='start' contentId='main'>
			<IonContent>
				<IonList>
					<IonMenuToggle auto-hide='false'>
						<IonItem
							button
							routerLink={'/home'}
							routerDirection='none'
							lines='none'
							className='icon'
						>
							<IonIcon ios={homeOutline} md={homeSharp} />
							<IonLabel className='home'>Home</IonLabel>
						</IonItem>

						{/* </IonMenuToggle>
					<IonMenuToggle auto-hide='false'> */}

						<IonItem
							button
							routerLink={'/'}
							routerDirection='none'
							lines='none'
							className='icon'
						>
							<IonIcon ios={discOutline} md={discSharp} />
							<IonLabel className='disc'>Tips & Trick</IonLabel>
						</IonItem>

						<IonItem
							button
							routerLink={'/'}
							routerDirection='none'
							lines='none'
							className='icon'
						>
							<IonIcon ios={helpCircleOutline} md={helpCircleSharp} />
							<IonLabel className='help'>Help & Support</IonLabel>
						</IonItem>

						<IonItem
							button
							routerLink={'/'}
							routerDirection='none'
							lines='none'
							className='icon'
						>
							<IonIcon ios={settingsOutline} md={settingsSharp} />
							<IonLabel className='setting'>Settings</IonLabel>
						</IonItem>
					</IonMenuToggle>
				</IonList>
			</IonContent>
		</IonMenu>
	);
};
