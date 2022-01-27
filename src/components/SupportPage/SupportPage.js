import { Button, ButtonDesign, CheckBox, Form, FormGroup, FormItem, Icon, Input, Label, Option, RatingIndicator, Select, Text, TextArea, Title, TitleLevel } from '@ui5/webcomponents-react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  return (
    <div>
      <div style={{ paddingBottom: '2rem' }}>
        <Title level={TitleLevel.H1} style={{ padding: '0.5rem', textAlign: 'center' }}>
          SAP India Pvt. Ltd.
        </Title>
        <div style={{ display: 'flex', paddingRight: '6rem', paddingLeft: '6rem' }}>
          <p style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
            <Text> 6th Floor, RMZ Ecoworld, 8A Campus,</Text>
            <br />
            <Text>Sarjapur-Marathahalli Outer Ring Road</Text>
            <br />
            <Text>Devarabeesanahalli</Text>
            <br />
            <Text>Bengaluru- 560 103</Text>
            <br />
            <Text>
              <Icon name="call" style={{ paddingRight: '0.25rem' }} />
              <Link>+91 80 6665 5555</Link>
            </Text>
            <br />
            <Text>
              <Icon name="fax-machine" style={{ paddingRight: '0.25rem' }} />
              <Link> +91 80 6665 5550</Link>
            </Text>
          </p>
          <p style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
            <Text> 5th Floor, Metro Towers</Text>
            <br />
            <Text>1 Ho Chi Minh Sarani</Text>
            <br />
            <Text>Kolkata - 700 071</Text>
            <br />
            <Text>India</Text>
            <br />
            <Text>
              <Icon name="call" style={{ paddingRight: '0.25rem' }} />
              <Link>+91 33 3058 2424</Link>
            </Text>
            <br />
            <Text>
              <Icon name="fax-machine" style={{ paddingRight: '0.25rem' }} />
              <Link>+91 33 3058 2411</Link>
            </Text>
          </p>
          <p style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
            <Text> 5th Floor, G-Block</Text>
            <br />
            <Text> C-59, BKC, Bandra East</Text>
            <br />
            <Text> Mumbai - 400 051</Text>
            <br />
            <Text>
              <Icon name="call" style={{ paddingRight: '0.25rem' }} />
              <Link>+91 22 6655 6888 / +91 22 3047 6888</Link>
            </Text>
            <br />
            <Text>
              <Icon name="fax-machine" style={{ paddingRight: '0.25rem' }} />
              <Link> +91 22 6655 6826 / +91 22 6655 6866</Link>
            </Text>
          </p>
          <p style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
            <Text>6th floor, plot no A-2 MGF Corporate Park,</Text>
            <br />
            <Text> MGF Metropolitan Mall, Saket,</Text>
            <br />
            <Text>New Delhi - 110017</Text>
            <br />
            <Text>India</Text>
            <br />
            <Text>
              <Icon name="call" style={{ paddingRight: '0.25rem' }} />
              <Link>+91 11 6602 7200 / + 91 11 3090 7200</Link>
            </Text>
            <br />
            <Text>
              <Icon name="fax-machine" style={{ paddingRight: '0.25rem' }} />
              <Link>+91 11 4162 8919</Link>
            </Text>
          </p>
        </div>
      </div>
      <div style={{ padding: '1rem' }}>
        <Form title="Please Fill the Below Details to Contact Us.!">
          <FormGroup title="Personal Data">
            <FormItem label="Name">
              <Input />
            </FormItem>
            <FormItem label={<Label>Address</Label>}>
              <Input />
            </FormItem>
            <FormItem label="Country">
              <Select>
                <Option>India</Option>
                <Option>Germany</Option>
                <Option>France</Option>
                <Option>Italy</Option>
              </Select>
            </FormItem>
            <FormItem label="Additional Comment">
              <TextArea
                rows={5}
                style={{
                  width: '210px',
                }}
              />
            </FormItem>
            <FormItem label="Home address">
              <CheckBox checked />
            </FormItem>
          </FormGroup>
          <FormGroup title="Company Data">
            <FormItem label="Company Name">
              <Input />
            </FormItem>
            <FormItem label="Company Address">
              <Input />
            </FormItem>
            <FormItem label="Company City">
              <Input />
            </FormItem>
            <FormItem label="Company Country">
              <Input />
            </FormItem>
            <FormItem label="Number of Employees">
              <Input type="Number" />
            </FormItem>
            <FormItem label="Member of Partner Network">
              <CheckBox checked />
            </FormItem>
          </FormGroup>
          <FormGroup title="Feedback">
            <FormItem label="Performance">
              <RatingIndicator />
            </FormItem>
            <FormItem label="User Experience">
              <RatingIndicator />
            </FormItem>
            <FormItem label="Customer Support">
              <RatingIndicator />
            </FormItem>
            <FormItem label="OverAll Support">
              <RatingIndicator />
            </FormItem>
          </FormGroup>
        </Form>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button icon="paper-plane" design={ButtonDesign.Emphasized}>
          Submit to Contact Us. !
        </Button>
      </div>
    </div>
  );
};

export default SupportPage;
