import { AnalyticalTable, Button, DateRangePicker, FilterBar, FilterGroupItem, FlexBox, Input, MultiComboBox, MultiComboBoxItem, Title } from '@ui5/webcomponents-react';
import { useState } from 'react';

const AllPipelines = () => {
  const [tableData, setTableData] = useState([]);
  const generateData = () => {
    const owners = ['Admin', 'Dev', 'Testing', 'Build'];
    const status = ['Success', 'Error', 'Information', 'Warning'];
    const triggeredBy = ['Jerry Anand', 'Luna Albert', 'Misha Joseph', 'Vijay'];
    const data = [
      {
        startAt: 'Aug 20th 12:05:49',
        owner: 'Admin',
        triggeredBy: 'Jerry Anand',
        pipelineName: 'EventConn-Pipeline1',
        status: 'Success',
      },
      {
        startAt: 'Aug 20th 10:42:49',
        owner: 'Dev',
        triggeredBy: 'Luna Albert',
        pipelineName: 'EventConn-DevPipeline',
        status: 'Error',
      },
      {
        startAt: 'Aug 20th 12:42:49',
        owner: 'Testing',
        triggeredBy: 'Misha Jospeh',
        pipelineName: 'EventConn-Pipeline3',
        status: 'Warning',
      },
      {
        startAt: 'Aug 19th 12:31:49',
        owner: 'Dev',
        triggeredBy: 'Luna joseph',
        pipelineName: 'EventConn-DevPipeline2',
        status: 'Information',
      },
      {
        startAt: 'Aug 19th 12:10:49',
        owner: 'Build',
        triggeredBy: 'Vijay',
        pipelineName: 'EventConn-BuildPipeline',
        status: 'Success',
      },
    ];
    for (let i = 0; i < 1000; i++) {
      const randomNumber = Math.floor(Math.random() * owners.length);
      data.push({
        startAt: 'Aug 20th 12:05:49',
        owner: owners[randomNumber],
        triggeredBy: triggeredBy[randomNumber],
        pipelineName: 'EventConn-Pipeline' + i,
        status: status[randomNumber],
      });
    }
    setTableData(data);
  };
  const onTriggeredByChange = (evt) => {
    const filterValues = [];
    evt.detail.items.forEach((item) => filterValues.push(item.text));
    const filteredData = tableData.filter((data) => {
      return filterValues.indexOf(data.triggeredBy) > -1;
    });
    setTableData(filteredData);
  };
  const onOwnerChange = (evt) => {
    const filterValues = [];
    evt.detail.items.forEach((item) => filterValues.push(item.text));
    const filteredData = tableData.filter((data) => {
      return filterValues.indexOf(data.owner) > -1;
    });
    setTableData(filteredData);
  };
  return (
    <>
      <Title style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>All Pipelines</Title>
      <FilterBar showFilterConfiguration>
        <FilterGroupItem label="Pipeline Name">
          <Input placeholder="Enter Pipeline Name" />
        </FilterGroupItem>
        <FilterGroupItem label="Start At">
          <DateRangePicker
            style={{
              minWidth: 'auto',
            }}
          />
        </FilterGroupItem>
        <FilterGroupItem label="Triggered By">
          <MultiComboBox  onSelectionChange={(evt) => onTriggeredByChange(evt)}>
            <MultiComboBoxItem text="Jerry Anand" />
            <MultiComboBoxItem text="Luna Albert" />
            <MultiComboBoxItem text="Misha Jospeh" />
            <MultiComboBoxItem text="Luna Joseph" />
            <MultiComboBoxItem text="Vijay" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Owner">
          <MultiComboBox onSelectionChange={(evt) => onOwnerChange(evt)}>
            <MultiComboBoxItem text="Admin" />
            <MultiComboBoxItem text="Dev" />
            <MultiComboBoxItem text="Testing" />
            <MultiComboBoxItem text="Build" />
          </MultiComboBox>
        </FilterGroupItem>
      </FilterBar>
      <AnalyticalTable
        columns={[
          {
            Header: 'Pipeline Name',
            accessor: 'pipelineName',
            canResize: false,
          },
          {
            Header: 'Start At',
            accessor: 'startAt',
            canResize: false,
          },
          {
            Header: 'Triggered by',
            accessor: 'triggeredBy',
            canResize: false,
          },
          {
            Header: 'Owner',
            accessor: 'owner',
            canResize: false,
          },
          {
            Header: '',
            accessor: '.',
            canResize: false,
            id: 'actions',
            width: '50',
            Cell: (instance) => {
              return (
                <FlexBox>
                  <Button
                    icon="show"
                    onClick={(evt) => {
                      // onDeleteButton(evt);
                    }}
                  ></Button>
                </FlexBox>
              );
            },
          },
        ]}
        data={tableData.length > 0 ? tableData : generateData()}
        filterable
        groupBy={[]}
        groupable
        header="Table Title"
        rowHeight={44}
        selectedRowIds={{
          3: true,
        }}
        selectionMode="SingleSelect"
        withRowHighlight
      />
    </>
  );
};

export default AllPipelines;
