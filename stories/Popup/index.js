import React from 'react';
import {storiesOf} from '@storybook/react';
import {ConfirmPopup, ContentPopup} from '../../source/Popup';
import {Button} from '../../source/Button';
import {boolean, text} from '@storybook/addon-knobs';
import StoryLayout from '../StoryLayout';

export default storiesOf('Popup', module)
	.add(
		'ConfirmPopup',

		() => {
			let confirmRef = null;

			const
				setConfirmRef = el => confirmRef = el,

				/* eslint-disable */
				openConfirm = () => confirmRef
					.open()
					.then(() => alert('confirm'))
				/* eslint-enable */

			return <StoryLayout>
				<Button onClick={openConfirm}>open confirm</Button>

				<ConfirmPopup
					ref={setConfirmRef}
					title={text('title', 'Заголовок')}
					text={text('text', 'Текст')}
					okName={text('okName', 'Подтвердить')}
					cancelName={text('cancelName', 'Отмена')}
					shouldCloseOnOverlayClick={boolean('shouldCloseOnOverlayClick', false)}
					disableClose={boolean('disableClose', false)}
				/>
			</StoryLayout>;
		},

		{info: {text: `
~~~js
import {ConfirmPopup} from 'modul-ui';
~~~

Применение через ref

~~~js
<ConfirmPopup ref={node => this.confirmRef = node} />

confirmRef.open().then(() => alert('confirm'))
~~~
		`}}
	)

	.add(
		'ContentPopup',

		() => {
			let contentRef = null;

			const
				setContentRef = el => contentRef = el,
				openContent = () => contentRef.open();

			return <StoryLayout>
				<Button onClick={openContent}>open popup</Button>

				<ContentPopup
					ref={setContentRef}
					shouldCloseOnOverlayClick={boolean('shouldCloseOnOverlayClick', false)}
					disableClose={boolean('disableClose', false)}
				>
					Содержимое окна
					<br />
					<br />
					<Button onClick={() => contentRef.close()}>Закрыть</Button>
				</ContentPopup>
			</StoryLayout>;
		},

		{info: {text: `
~~~js
import {ContentPopup} from 'modul-ui';
~~~

Применение через ref

~~~js
<ContentPopup ref={node => this.contentRef = node} />

contentRef.open()
contentRef.handleCloseMethod()
~~~
		`}}
	);