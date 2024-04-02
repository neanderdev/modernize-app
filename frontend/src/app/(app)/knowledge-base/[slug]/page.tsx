import { MoveLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { InputSearch } from '@/components/InputSearch';
import { Separator } from '@/components/Separator';

import './styles.css';

export const metadata: Metadata = {
    title: 'Getting Started',
}

export default function KnowledgeBaseBySlugPage() {
    return (
        <>
            <div className='header-admin'>
                <div className='title'>
                    <Link href='/knowledge-base'>
                        <MoveLeft size={16} />

                        Back
                    </Link>

                    <h5>Getting Started</h5>
                </div>
            </div>

            <div className='article-knowledge-container'>
                <div className='navigation'>
                    <ul>
                        <li className='active'>
                            <Link href=''>Introduction to Product</Link>
                        </li>

                        <li>
                            <Link href=''>Tutorials for Beginners</Link>
                        </li>

                        <li>
                            <Link href=''>Moving to Bolt System</Link>
                        </li>

                        <li>
                            <Link href=''>Accessibility</Link>
                        </li>

                        <li>
                            <Link href=''>Content Management</Link>
                        </li>

                        <li>
                            <Link href=''>Generating Reports</Link>
                        </li>
                    </ul>
                </div>

                <div className='article-knowledge'>
                    <InputSearch
                        type='search'
                        name='search'
                        placeholder='Search...'
                        outline
                    />

                    <article>
                        <h6>Introduction to Product</h6>

                        <p>
                            Bolt is content management system, or CMS. Subscription includes
                            content hosting, professionally designed layouts, 24/7 support,
                            and access to our user-friendly platform for managing your
                            business. You can use bolt to create management systems.
                        </p>

                        <code>
                            <span>Recommended:</span>

                            <span>
                                You can learn faster by looking some onboarding videos in
                                video gallery.
                            </span>
                        </code>

                        <Separator />

                        <h6>Starting Guide</h6>

                        <p>
                            You can choose from a range of billing plans to get your idea
                            working, whether you’re starting with a website or launching a
                            new business.
                        </p>

                        <div className='list-numbered-container'>
                            <div className='list-numbered'>
                                <span className='number'>1</span>

                                <p>
                                    All billing plans are available on monthly and annual
                                    payment cycles. On an annual billing cycle, the average
                                    monthly cost is lower, and you can get a 3 months free.All
                                    billing plans are available on monthly and annual payment
                                    cycles. On an annual billing cycle, the average monthly cost
                                    is lower, and you can get a 3 months free.
                                </p>
                            </div>

                            <div className='list-numbered'>
                                <span className='number'>2</span>

                                <p>
                                    Upgrade to paid service to make your site public. If you
                                    need more time to design your site before going live, you
                                    can hide it behind a password.
                                </p>
                            </div>

                            <div className='list-numbered'>
                                <span className='number'>3</span>

                                <p>
                                    Site has a trial period. Trial period is free two-week
                                    period where you can explore the platform, upload content,
                                    experiment with ecommerce website.
                                </p>
                            </div>
                        </div>

                        <Separator />

                        <h6>Additional Information</h6>

                        <div className='tabs'>
                            <button className='tab active' type='button'>Onboarding</button>

                            <button className='tab' type='button'>Tutorials</button>

                            <button className='tab' type='button'>Guides for Beginners</button>
                        </div>

                        <div className='onboarding'>
                            <p>
                                In addition to our guides and video tutorials, we offer
                                webinars to help you get comfortable and explore our product
                                functionality. In our webinars, we walk you through the basics
                                of setting up and growing your business.
                            </p>

                            <p>
                                After it ends, we`ll email you a video link to the webinar so
                                you can remember everything you have learn anytime. If you
                                can`t attend the webinar at its scheduled time, you can watch
                                it later.
                            </p>
                        </div>

                        <Separator />

                        <h6>Was this article helpfull?</h6>

                        <div className='actions-button'>
                            <Button
                                type='button'
                                title='Yes'
                                buttonSize='small'
                                buttonType='white'
                            />

                            <Button
                                type='button'
                                title='No'
                                buttonSize='small'
                                buttonType='white'
                            />
                        </div>

                        <span className='article-helpful'>
                            50 people find this article helpful
                        </span>
                    </article>

                    <div className='knowledge-others'>
                        <div className='knowledge'>
                            <strong>Community Forum</strong>

                            <span>Get help from community members, ask any questions and get answers faster.</span>

                            <Link href=''>Join Community</Link>
                        </div>

                        <div className='knowledge'>
                            <strong>Webinars</strong>

                            <span>Join our series of webinars where you can ask questions live and see a presentation.</span>

                            <Link href=''>Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
