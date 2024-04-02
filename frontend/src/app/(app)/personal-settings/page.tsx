import { Metadata } from 'next';

import { Button } from '@/components/Button';
import { DragAndDropUpload } from '@/components/DragAndDropUpload';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Separator } from '@/components/Separator';
import { Switch } from '@/components/Switch';

import './styles.css';

export const metadata: Metadata = {
    title: 'Personal Settings',
}

export default function PersonalSettingsPage() {
    return (
        <>
            <div className='header-admin'>
                <h5>Settings</h5>

                <div className='buttons-wrapper'>
                    <Button
                        type='button'
                        title='Cancel'
                        buttonType='white'
                        buttonSize='medium'
                    />

                    <Button
                        type='button'
                        title='Save'
                        buttonType='primary'
                        buttonSize='medium'
                    />
                </div>
            </div>

            <div className='personal-settings'>
                <div className='tabs'>
                    <button className='tab active' type='button'>Profile</button>

                    <button className='tab' type='button'>Notifications</button>

                    <button className='tab' type='button'>Account</button>

                    <button className='tab' type='button'>Security</button>
                </div>

                <div className='profile-tab'>
                    <div className='header-card'>
                        <div className='title-description'>
                            <span>Profile Details</span>

                            <p>Enter your profile information</p>
                        </div>
                    </div>

                    <DragAndDropUpload
                        fileSize='medium'
                    />

                    <div className='options-form-container'>
                        <Input
                            label='First Name'
                            name='first-name'
                            id='first-name'
                            inputSize='medium'
                            type='text'
                            placeholder='First Name'
                        />

                        <Input
                            label='Last Name'
                            name='last-name'
                            id='last-name'
                            inputSize='medium'
                            type='text'
                            placeholder='Last Name'
                        />
                    </div>

                    <div className='options-form-container'>
                        <Input
                            label='Email Address'
                            name='email-address'
                            id='email-address'
                            inputSize='medium'
                            type='email'
                            placeholder='Email Address'
                        />

                        <Input
                            label='Phone Number'
                            name='phone-number'
                            id='phone-number'
                            inputSize='medium'
                            type='text'
                            placeholder='Phone Number'
                        />
                    </div>

                    <Separator />

                    <div className='header-card'>
                        <div className='title-description'>
                            <span>Regional Settings</span>

                            <p>Set your language and timezone</p>
                        </div>
                    </div>

                    <div className='options-form-container'>
                        <Select
                            label='Language'
                            name='select-language'
                            id='select-language'
                            selectSize='medium'
                            options={[
                                {
                                    value: '',
                                    title: 'Choose'
                                },
                                {
                                    value: 'english',
                                    title: 'English'
                                },
                                {
                                    value: 'spanish',
                                    title: 'Spanish'
                                },
                                {
                                    value: 'portuguese',
                                    title: 'Portuguese'
                                },
                            ]}
                        />

                        <Select
                            label='Timezone'
                            name='select-timezone'
                            id='select-timezone'
                            selectSize='medium'
                            options={[
                                {
                                    value: '',
                                    title: 'Choose'
                                },
                                {
                                    value: 'gmt+02:00',
                                    title: 'GMT +02:00'
                                },
                                {
                                    value: 'gmt+03:00',
                                    title: 'GMT +03:00'
                                },
                                {
                                    value: 'gmt+04:00',
                                    title: 'GMT +04:00'
                                },
                            ]}
                        />
                    </div>
                </div>

                <div className='notifications-tab'>
                    <Switch
                        labelLeftTitle='Personalized Offers'
                        labelLeftDescription='Receive offers made special for you'
                        name='personalized-offers'
                        id='personalized-offers'
                        switchSize='medium'
                        defaultChecked
                    />

                    <Separator />

                    <Switch
                        labelLeftTitle='Online Webinars'
                        labelLeftDescription='Get notified about upcoming webinars'
                        name='online-webinars'
                        id='online-webinars'
                        switchSize='medium'
                        defaultChecked
                    />

                    <Separator />

                    <Switch
                        labelLeftTitle='New Features'
                        labelLeftDescription='Updates about new features and product releases'
                        name='new-features'
                        id='new-features'
                        switchSize='medium'
                        defaultChecked
                    />

                    <Separator />

                    <Switch
                        labelLeftTitle='Security and Billing'
                        labelLeftDescription='Account security and notifications about billing'
                        name='security-and-billing'
                        id='security-and-billing'
                        switchSize='medium'
                    />

                    <Separator />

                    <Switch
                        labelLeftTitle='Marketing'
                        labelLeftDescription='Receive marketing newsletters about our new products.'
                        name='marketing'
                        id='marketing'
                        switchSize='medium'
                    />
                </div>
            </div>

            <Separator />

            <div className='actions-bottom'>
                <Button
                    type='button'
                    title='Cancel'
                    buttonType='white'
                    buttonSize='medium'
                />

                <Button
                    type='button'
                    title='Save'
                    buttonType='primary'
                    buttonSize='medium'
                />
            </div>
        </>
    );
}

