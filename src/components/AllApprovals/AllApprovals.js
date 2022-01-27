import {
  Avatar,
  BusyIndicator,
  DateRangePicker,
  FilterBar,
  FilterGroupItem,
  Input,
  Label,
  MultiComboBox,
  MultiComboBoxItem,
  NotificationAction,
  NotificationListItem,
  Title,
} from '@ui5/webcomponents-react';
import { useState } from 'react';

const AllDeadlinePipelines = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const generateNotifications = () => {
    setIsLoading(true);
    const periods = ['Days', 'Months', 'Weeks'];
    const colorSchemes = ['Accent1', 'Accent2', 'Accent3'];
    const headings = ['EventConn-BuildPipelinepatchb211 - deploy in prod', 'EventConn-DevPipeline1- deploy in dev', 'EventConn-b2105- deploy in dev'];
    const data = [];
    for (let i = 0; i < 200; i++) {
      const randomNumber = Math.floor(Math.random() * periods.length);
      data.push(
        <NotificationListItem
          actions={<NotificationAction text="Approve" />}
          avatar={<Avatar colorScheme={colorSchemes[randomNumber]} icon="employee" size="XS" />}
          footnotes={<Label>3 {periods[randomNumber]}</Label>}
          showClose
          heading={headings[randomNumber] + i}
        ></NotificationListItem>,
      );
    }
    setNotifications(data);
    setIsLoading(false);
  };

  const onDateChange = (evt) => {
    setIsLoading(true);
    setNotifications(notifications.slice(100, 125));
    setIsLoading(false);
  };
  return (
    <>
      <Title style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>Pending Approvals</Title>
      <FilterBar showFilterConfiguration>
        <FilterGroupItem label="Contains Text">
          <Input placeholder="Enter Keywords" />
        </FilterGroupItem>
        <FilterGroupItem label="Start At">
          <DateRangePicker
            style={{
              minWidth: 'auto',
            }}
            onChange={(evt) => onDateChange(evt)}
          />
        </FilterGroupItem>
        <FilterGroupItem label="Requested By">
          <MultiComboBox onSelectionChange={(evt) => onDateChange(evt)}>
            <MultiComboBoxItem text="Jerry Anand" />
            <MultiComboBoxItem text="Luna Albert" />
            <MultiComboBoxItem text="Misha Jospeh" />
            <MultiComboBoxItem text="Luna Joseph" />
            <MultiComboBoxItem text="Vijay" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Team">
          <MultiComboBox onSelectionChange={(evt) => onDateChange(evt)}>
            <MultiComboBoxItem text="Admin" />
            <MultiComboBoxItem text="Dev" />
            <MultiComboBoxItem text="Testing" />
            <MultiComboBoxItem text="Build" />
          </MultiComboBox>
        </FilterGroupItem>
      </FilterBar>
      {isLoading ? <BusyIndicator active={isLoading} /> : <div style={{ padding: '0.25rem' }}>{notifications.length > 0 ? notifications : generateNotifications()}</div>}
    </>
  );
};

export default AllDeadlinePipelines;
