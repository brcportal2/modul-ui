/* eslint-disable indent,no-console,react/jsx-tag-spacing */
import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryLayout from '../StoryLayout';
import {FileUpload} from "../../source/DropZone";

const loading = true;

export default storiesOf('FileUpload', module)
	.add(
		'default',

		() =>
			<StoryLayout>

				<div class="legend"><span>Блоки для загрузки</span></div>
				<div class="light_text mb20">Сетка</div>

				<div>
					<class>.file_upload_list > .file_upload_block</class>
					<example style={{width: '800px'}}>
						<div class="file_upload_list">

							<FileUpload title={(<span><strong>Проект банковской гарантии</strong>согласованный с
								заказчиком</span>)}/>

							<FileUpload title="Проект банковской гарантии согласованный с заказчиком проект
									банковской гарантии согласованный с заказчиком проект банковской гарантии
									согласованный с заказчиком"/>

							<FileUpload fileName="document.rar"
										onDelete={event => console.log('Удалить файл', event)}
										title="Архив .zip с документами о внесении в ЕГРИП, подписанными электронной подписью ФНС"/>

							<FileUpload fileName="document.rar"
										title="Архив .zip с документами о внесении в ЕГРИП, подписанными электронной подписью ФНС"/>

							<FileUpload fileName="document.rar"
										loading={loading}
										loadingText="Выполняется проверка документа"
										title="Архив .zip с документами о внесении в ЕГРИП, подписанными электронной подписью ФНС"/>

							<FileUpload fileName="document.rar"
										downloadLink="document.rar"
										title="Архив .zip с документами о внесении в ЕГРИП, подписанными электронной подписью ФНС"/>

							<FileUpload title={(<span><strong>Проект банковской гарантии</strong>согласованный с
								заказчиком</span>)}
										renderIcon=
											/* eslint-disable no-mixed-spaces-and-tabs */
											{() => (<i class="icon-info c_error"
													   title="Не удалось подтвердить подлинность электронной подписи. Убедитесь, что загрузили архив с правильным исходным документом и файлом подписи. Если нет — повторно запросите у клиента исходный документ и файл подписи"/>)}
										error="Подпись не верна"/>
						</div>
					</example>
				</div>

				<div class="light_text mb20 mt20">Список</div>
				<div>
					<class>.file_upload_list.vertical > .file_upload_block</class>
					<example>
						<div class="file_upload_list vertical">

							<FileUpload title={(<span><strong>Проект банковской гарантии</strong>согласованный с
								заказчиком</span>)}/>

							<FileUpload fileName="document.rar"
										columnClass=""
										onDelete={event => console.log('Удалить файл', event)}
										title="Архив .zip с документами о внесении в ЕГРИП, подписанными электронной подписью ФНС"/>

							<FileUpload
								fileName="document_with_over______________________________________________________________________________________________________________long_name.rar"
								columnClass=""
								onDelete={event => console.log('Удалить файл', event)}/>


							<FileUpload fileName="document.rar"
										loading={loading}
										columnClass=""
										title="Архив .zip с документами о внесении в ЕГРИП, подписанными электронной подписью ФНС"/>


							<FileUpload progress={95}
										columnClass=""
										onDelete={event => console.log('Удалить файл', event)}/>

							<FileUpload progress={95}
										fileName={"test.zip"}
										columnClass=""
										onDelete={event => console.log('Удалить файл', event)}/>


							<FileUpload title={(<span><strong>Проект банковской гарантии</strong>согласованный с
								заказчиком</span>)}
										columnClass={""}
										renderIcon=
											/* eslint-disable no-mixed-spaces-and-tabs */
											{() => (<i class="icon-info c_error"
													   title="Не удалось подтвердить подлинность электронной подписи. Убедитесь, что загрузили архив с правильным исходным документом и файлом подписи. Если нет — повторно запросите у клиента исходный документ и файл подписи"/>)}
										error="Подпись не верна"/>

						</div>
					</example>
				</div>


				<div class="light_text mb20 mt20">Список (упрощенный)</div>
				<div>
					<class>.file_upload_list > .file_upload_item</class>
					<example>
						<div class="file_upload_list">


							<div class="file_upload_item">
								<a class="file_delete delete show"/>
								<div class="total-progress-box">
									<div class="total-progress" style={{width: '56%'}}/>
									<div class="total-progress-value">56%</div>
								</div>
							</div>


							<div class="file_upload_item">
								<div class="poss">
									<a class="file_delete trash icon-trash-bin"/>
									<div class="file_icon rar"/>
									<a class="file_name">dbgkdbfkg.rar</a>
								</div>
							</div>


							<div class="file_upload_item error">
								<div class="poss">
									<a class="file_delete trash icon-trash-bin"/>
									<div class="file_icon rar"/>
									<a class="file_error_text">Ошибка</a>
									<a class="file_name">dbgkdbfkg.rar</a>
								</div>
							</div>
						</div>
					</example>
				</div>

				<div>
					<class>.file_upload_list > .file_upload_item.file_upload_item__bordered</class>
					<example style={{paddingTop: '50px'}}>
						<div class="file_upload_list">

							<div class="file_upload_item file_upload_item__bordered">
								<a class="file_delete delete show"/>
								<div class="total-progress-box">
									<div class="total-progress" style={{width: '56%'}}/>
									<div class="total-progress-value">56%</div>
								</div>
							</div>


							<div class="file_upload_item file_upload_item__bordered">
								<div class="poss">
									<a class="file_delete trash icon-trash-bin"/>
									<div class="file_icon rar"/>
									<a class="file_name">dbgkdbfkg.rar</a>
								</div>
							</div>


							<div class="file_upload_item file_upload_item__bordered error">
								<div class="poss">
									<a class="file_delete trash icon-trash-bin"/>
									<div class="file_icon rar"/>
									<a class="file_error_text">Ошибка</a>
									<a class="file_name">dbgkdbfkg.rar</a>
								</div>
							</div>
						</div>
					</example>
				</div>
			</StoryLayout>,

		{
			info: {
				text: `
		import {FileUpload} from 'modul-ui';
		`
			}
		}
	);