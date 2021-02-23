import React, { useState } from 'react'
import { Link } from 'gatsby'

const FooterListItem = ({ to, children, border = true }) => {
    const baseClasses = 'block py-3 text-white text-opacity-60 hover:text-opacity-100 hover:text-white'
    const fullClassList = border ? `${baseClasses} border-b border-gray-600` : baseClasses

    return (
        <Link to={to} className={fullClassList}>
            {children}
        </Link>
    )
}

const FooterSubCategory = ({ children }) => <h7 className="block text-white mt-8 font-bold">{children}</h7>

const FooterCategory = ({ children, title }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div>
            <h5
                className="md:hidden cursor-pointer text-white text-lg border-b border-gray-600 py-2 my-2"
                onClick={() => setExpanded(!expanded)}
            >
                {title}

                <span className="float-right block text-2xl">{expanded ? '-' : '+'}</span>
            </h5>
            <h5 className="hidden md:block text-white text-lg">{title}</h5>
            <div className={expanded ? 'block' : 'hidden md:block'}>{children}</div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer py-24">
            <div className="w-11/12 max-w-4xl flex flex-col md:flex-row justify-between mx-auto">
                <div className="w-full md:w-1/4 md:pr-8">
                    <FooterCategory title="Product">
                        <FooterSubCategory>Overview</FooterSubCategory>
                        <FooterListItem to="" border={false}>
                            Product overview &amp; comparison
                        </FooterListItem>

                        <FooterSubCategory>Product suite</FooterSubCategory>
                        <FooterListItem to="">Analytics</FooterListItem>
                        <FooterListItem to="">Heatmaps</FooterListItem>
                        <FooterListItem to="">Session replay</FooterListItem>
                        <FooterListItem to="">Feature Flags</FooterListItem>
                        <FooterListItem to="">User feedback</FooterListItem>
                        <FooterListItem to="" border={false}>
                            Revenue tracking
                        </FooterListItem>

                        <FooterSubCategory>Features</FooterSubCategory>
                        <FooterListItem to="">Auto capture</FooterListItem>
                        <FooterListItem to="">Plugins</FooterListItem>
                        <FooterListItem to="">Data portability</FooterListItem>
                        <FooterListItem to="" border={false}>
                            Private cloud deployment
                        </FooterListItem>
                    </FooterCategory>
                </div>
                <div className="w-full md:w-1/4 md:px-8">
                    <FooterCategory title="Community">
                        <FooterSubCategory>Code</FooterSubCategory>
                        <FooterListItem to="">Source code</FooterListItem>
                        <FooterListItem to="" border={false}>
                            All repositories
                        </FooterListItem>

                        <FooterSubCategory>Discussion</FooterSubCategory>
                        <FooterListItem to="">Slack</FooterListItem>
                        <FooterListItem to="">Issues</FooterListItem>
                        <FooterListItem to="">Support</FooterListItem>
                        <FooterListItem to="" border={false}>
                            Contact sales
                        </FooterListItem>

                        <FooterSubCategory>Get involved</FooterSubCategory>
                        <FooterListItem to="">Roadmap</FooterListItem>
                        <FooterListItem to="">Contributors</FooterListItem>
                        <FooterListItem to="" border={false}>
                            Merch
                        </FooterListItem>
                    </FooterCategory>
                </div>
                <div className="w-full md:w-1/4 md:px-8">
                    <FooterCategory title="Docs">
                        <FooterSubCategory>Getting started</FooterSubCategory>
                        <FooterListItem to="">Open source</FooterListItem>
                        <FooterListItem to="">Private cloud</FooterListItem>
                        <FooterListItem to="" border={false}>
                            PostHog cloud
                        </FooterListItem>

                        <FooterSubCategory>Configuring PostHog</FooterSubCategory>
                        <FooterListItem to="">Installation</FooterListItem>
                        <FooterListItem to="">Docs</FooterListItem>
                        <FooterListItem to="">API</FooterListItem>
                        <FooterListItem to="" border={false}>
                            Libraries
                        </FooterListItem>

                        <FooterSubCategory>Using PostHog</FooterSubCategory>
                        <FooterListItem to="">Features</FooterListItem>
                        <FooterListItem to="">Plugins</FooterListItem>
                        <FooterListItem to="">Tutorials</FooterListItem>
                        <FooterListItem to="" border={false}>
                            FAQ
                        </FooterListItem>
                    </FooterCategory>
                </div>
                <div className="w-full md:w-1/4 md:pl-8">
                    <FooterCategory title="Company">
                        <FooterSubCategory>About</FooterSubCategory>
                        <FooterListItem to="">Open source</FooterListItem>
                        <FooterListItem to="">Our story</FooterListItem>
                        <FooterListItem to="">Handbook</FooterListItem>
                        <FooterListItem to="">Team</FooterListItem>
                        <FooterListItem to="">Investors</FooterListItem>
                        <FooterListItem to="" border={false}>
                            Careers
                        </FooterListItem>

                        <FooterSubCategory>Resources</FooterSubCategory>
                        <FooterListItem to="">Blog</FooterListItem>
                        <FooterListItem to="">HogTalks</FooterListItem>
                        <FooterListItem to="">Media</FooterListItem>
                        <FooterListItem to="" border={false}>
                            Merch
                        </FooterListItem>

                        <FooterSubCategory>Get in touch</FooterSubCategory>
                        <FooterListItem to="">Contact sales</FooterListItem>
                        <FooterListItem to="" border={false}>
                            Support
                        </FooterListItem>
                    </FooterCategory>
                </div>
            </div>
        </div>
    )
}

export default Footer
