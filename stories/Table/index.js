import React from 'react';
import {storiesOf} from '@storybook/react';
import {Table} from '../../source/Table';
import {Checkbox} from '../../source/Checkbox';
import {select, text, boolean} from '@storybook/addon-knobs';
import StoryLayout from '../StoryLayout';

export default storiesOf('Table', module)
	.add(
		'default',

		() => {
			return <StoryLayout styleInnerBlock={{width: '100%'}}>
				<Table>
					<thead>
						<tr>
							<Table.Th
								field="name"
								sortField={text('sortField', 'name')}
								sortDirection={select('sortDirection', ['desc', 'asc'], 'desc')}
							>
								Наименование
							</Table.Th>

							<Table.Th
								field="sum"
								sortField={text('sortField', 'name')}
								sortDirection={select('sortDirection', ['desc', 'asc'], 'desc')}
							>
								Сумма
							</Table.Th>
						</tr>
					</thead>

					<Table.Tbody
						columnsNumber={2}
						isLoadingRowShown={boolean('isLoadingRowShown', false)}
						isEmptyMessageRowShown={boolean('isEmptyMessageRowShown', false)}
						emptyMessage={text('emptyMessage', 'Сообщение о пустоте') || undefined}
					>
						<tr>
							<td>Товар 1</td>
							<td>1000</td>
						</tr>

						<tr>
							<td>Товар 2</td>
							<td>2000</td>
						</tr>
					</Table.Tbody>
				</Table>
			</StoryLayout>;
		},

		{info: {text: `
		import {Table} from 'modul-ui';
		`}}
	)

	.add(
		'with checkbox and operations panel',

		() => {
			return <StoryLayout styleInnerBlock={{width: '100%'}}>
				<Table>
					<thead>
						<tr>
							<th className="check"><Checkbox id="all checkbox" /></th>
							<th>Наименование</th>
							<th>Сумма</th>
						</tr>
					</thead>

					<Table.Tbody>
						<tr>
							<td className="check"><Checkbox id="checkbox 1" /></td>
							<td>Товар 1</td>
							<td>1000</td>
						</tr>

						<tr>
							<td className="check"><Checkbox id="checkbox 2" /></td>
							<td>Товар 2</td>
							<td>2000</td>
						</tr>

						<tr>
							<td className="check"><Checkbox id="checkbox 3" /></td>
							<td>Товар 3</td>
							<td>3000</td>
						</tr>

						<tr>
							<td className="check"><Checkbox id="checkbox 4" /></td>
							<td>Товар 4</td>
							<td>4000</td>
						</tr>
					</Table.Tbody>
				</Table>

				<Table.MassOperationsPanel
					caption="Выбрано контрагентов:"
					numberSelectedItems={2}
					onResetClick={() => {}}

					buttons={[
						{
							key: 'delete',
							title: 'Удалить выделенные',
							icon: 'trash-bin',
							onClick: () => {}
						}
					]}
				/>
			</StoryLayout>;
		},

		{info: {
			text: `
			import {Table} from 'modul-ui';
			`,

			inline: false // панель массовых операций всегда внизу, поэтому инфу пришлось вынести в отдельную вкладку
		}}
	);