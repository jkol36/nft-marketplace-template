import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";
import Item from "./Item";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container-fluid", styles.container)}>
        <div className={styles.top}>
          <div className={styles.stage}>
            Learn about our Terms and Conditions
          </div>
          <h1 className={cn("font-48", styles.title)}>Terms and Conditions</h1>
          {/* <div className={styles.info}>
            ClosedSea d/b/a ClosedSea (“ClosedSea”, “we” or “us”) values the
            privacy of our users and is committed to protecting your personal
            data. We have prepared this Privacy Policy to describe to you our
            practices regarding the Personal Data (as defined in section 2
            below) we collect from users of our website, located at link here
            (the “Site”) and online services provided through the Site
            (collectively, the “Service”).
          </div> */}
        </div>
        <div className={styles.policy}>
          <ol>
            <li>
              Introduction
              <ol>
                <li>
                  Welcome to the ClosedSea website (<strong>“Site”</strong>),
                  owned and operated by ClosedSea Limited. d/b/a ClosedSea (
                  <strong>“ClosedSea”</strong>, <strong>“we”</strong>,{" "}
                  <strong>“us”</strong> or<strong>“our”</strong>). We at
                  ClosedSea strive to maintain the highest level of compliance.
                  These Terms of Service (<strong>“Terms”</strong>) govern
                  users’ access to and use of the Site including without
                  limitation:
                  <ol>
                    <li>
                      the creation, purchase, sale (including by way of auction
                      (<strong>“Auction”</strong>) in accordance with our
                      Auction rules, exchange, or modification of unique
                      non-fungible tokens, implemented on the Binance Smart
                      Chain network (<strong>“BSC”</strong>) using smart
                      contracts (<strong>“Crypto Assets”</strong>) on our
                      platform (<strong>“Platform”</strong>);{" "}
                    </li>
                    <li>our online and/or mobile services; and </li>
                    <li>
                      software provided on or in connection with those services,
                    </li>
                    (collectively, the <strong>“Service”</strong>).
                  </ol>
                </li>
                <p class="css-lur2ps">
                  A detailed description of the Service is set out in section 4
                  below.
                </p>
                <li>
                  YOU SHALL READ THESE TERMS CAREFULLY BEFORE ACCESSING THE
                  PLATFORM AND/OR USING THE SERVICE AND REVIEW THE TERMS
                  PERIODICALLY AND REGULARLY FOR CHANGES. BY ACCESSING THE
                  PLATFORM AND/OR USING THE SERVICE YOU AGREE TO BE BOUND BY
                  THESE TERMS AND AGREE THAT SUCH TERMS CONSTITUTE A LEGALLY
                  BINDING AGREEMENT BETWEEN YOU AND US. IF YOU DO NOT AGREE TO
                  BE FULLY BOUND BY THESE TERMS YOU MUST NOT ACCESS THE PLATFORM
                  AND/OR USE THE SERVICE.{" "}
                </li>
                <li>
                  IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR
                  OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE LEGAL
                  AUTHORITY TO ACCEPT THE TERMS ON THAT ENTITY’S BEHALF, IN
                  WHICH CASE <strong>“YOU”</strong> WILL MEAN THAT ENTITY. IF
                  YOU DO NOT HAVE THIS AUTHORITY OR IF YOU DO NOT AGREE TO BE
                  FULLY BOUND BY THESE TERMS, YOU MUST NOT ACCESS THE PLATFORM
                  AND/OR USE THE SERVICE.{" "}
                </li>
                <li>
                  CLOSEDSEA RESERVES THE RIGHT TO CHANGE OR MODIFY THESE TERMS
                  FROM TIME TO TIME. IF WE MAKE CHANGES TO THESE TERMS, WE WILL
                  NOT PROVIDE NOTICE OF SUCH CHANGES AND THE AMENDED TERMS SHALL
                  HAVE IMMEDIATE EFFECT UPON BEING POSTED ON THE SITE, SUBJECT
                  TO ANY APPLICABLE LAW. BY CONTINUING TO ACCESS THE PLATFORM
                  AND/OR USE THE SERVICE, YOU CONFIRM YOUR ACCEPTANCE OF THE
                  REVISED TERMS AND ALL OF THE TERMS INCORPORATED THEREIN BY
                  REFERENCE. WE ENCOURAGE YOU TO REVIEW THE TERMS FREQUENTLY TO
                  ENSURE THAT YOU UNDERSTAND THE TERMS AND CONDITIONS THAT APPLY
                  WHEN YOU ACCESS THE PLATFORM AND/OR USE THE SERVICE. ALL USERS
                  SHALL IMMEDIATELY DISCONTINUE THEIR USE OF THE SERVICE SHOULD
                  THEY DISAGREE TO BE FULLY BOUND BY THE AMENDED TERMS.
                </li>
              </ol>
            </li>
            <li>
              Privacy Policy
              <p class="css-lur2ps">
                Please refer to our{" "}
                <Link class="css-ej165o" to="/privacy-policy">
                  Privacy Policy
                </Link>{" "}
                for information about how we collect, use and share personal
                information about you{" "}
              </p>
            </li>
            <li>
              Eligibility and Compliance
              <ol>
                <li>
                  You must access the Platform and/or use the Service in
                  accordance with the Terms, in addition to the law of your
                  country of residence, country of citizenship, and any other
                  relevant law that is applicable to you.
                </li>
                <li>
                  It is your sole responsibility to check and ensure whether you
                  are legally permitted to access the Platform and/or use the
                  Service under the law of your country of residence, country of
                  citizenship, and any other relevant law that is applicable to
                  you.
                </li>
                <li>
                  When you connect a wallet (as described in section 7 below),
                  you represent and warrant (collectively referred to as the
                  <strong>“Representations and Warranties”</strong>) to
                  ClosedSea that:
                  <ol>
                    <li>
                      You are 18 years of age or more and possess the capacity
                      to form a binding contract, and have the full capacity to
                      accept these Terms, use the Service and conduct any
                      transactions on the Platform (
                      <strong>“Transaction”</strong>);
                    </li>
                    <li>
                      If requested by us, you will provide us with accurate,
                      true and complete information about yourself (including,
                      but not limited to, your name and email address);{" "}
                    </li>
                    <li>
                      If you are an individual using the Service, you are not
                      using the Service as an agent, proxy, or otherwise on
                      behalf of another user and you have sole and complete
                      control, access and ownership of all keys and passwords to
                      your Account (as defined in section 7.1 below);{" "}
                    </li>
                    <li>
                      If you are representing a company or other legal entity,
                      you are acting as their authorized representative, and
                      both you and the entity you represent will be bound by and
                      comply with these Terms;
                    </li>
                    <li>
                      Your access to the Platform, use of the Service and all
                      activities being conducted on the Platform are and will be
                      in full compliance with these Terms and all relevant laws
                      and regulations, and such access, use and activities are
                      not prohibited by any applicable laws or regulations, and
                      is not for any illegal or immoral purposes;
                    </li>
                    <li>
                      By accessing the Platform and/or using the Service, You
                      have not, and will not, infringe any representations,
                      covenants, restrictions and rights of any other party;
                    </li>
                    <li>
                      You have obtained, all rights, licenses, consents,
                      permissions, power and/or authority necessary or otherwise
                      to create, sell, buy or exchange the Crypto Assets.
                    </li>
                    <li>
                      You have and will continue to abide by the law of your
                      country of residence, country of citizenship, and any
                      other relevant law that is applicable to You, including
                      but not limited to reporting any trading activities or
                      profits for taxation purposes;{" "}
                    </li>
                    <li>
                      You have not been suspended or removed from any other
                      exchange (whether crypto-exchange or otherwise) for any
                      reason;{" "}
                    </li>
                    <li>
                      You are experienced in Crypto Assets and understand the
                      risks involved in Transactions involving Crypto Assets
                      including but not limited to, the risk of purchasing
                      counterfeit assets, mislabeled assets, assets that are
                      vulnerable to metadata decay, assets on smart contracts
                      with bugs, and assets that may become untransferable;{" "}
                    </li>
                    <li>
                      You have received or had access to all necessary
                      independent legal and financial advice prior to using the
                      Service and have not relied and will not rely on any
                      statements, announcements, notices, advertisements,
                      materials and/or information as published by ClosedSea to
                      enter into any Transaction; and
                    </li>
                    <li>
                      You have not and will not be accessing the Platform with
                      any device, software or system that alters your IP address
                      to be different from your physical location.
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              The Service{" "}
              <ol>
                <li>
                  ClosedSea offers a decentralized platform for the creation,
                  purchase, sale, exchange, or modification of unique
                  non-fungible tokens, implemented on the Binance Smart Chain
                  network using smart contracts. ClosedSea only provides a
                  Platform to facilitate Transactions between you and other
                  users, but ClosedSea will not be storing or holding any Crypto
                  Assets on behalf of any user. Users will be able to access
                  Crypto Asset prices, trade information and utilize any trading
                  agreements as made available on the Platform in order to
                  conduct a Transaction. All Transactions are executed by the
                  participating users in accordance with the terms and
                  conditions of the smart contract between and as determined by
                  the participating users.
                </li>
                <li>
                  The Platform may be accessible via website. The Service is
                  being offered on a self-service basis, subject to payment of
                  the Fees. All users must ensure they access the Platform from
                  a secure and trustworthy source or device.
                </li>
                <li>
                  The Service will only be accessible after the users have
                  performed the Procedure (as defined in section 7.1). Users
                  must comply with the Procedure, which ClosedSea may change
                  from time-to-time. Failure to do so may result in failure in
                  accessing the Service.
                </li>
                <li>
                  ClosedSea is unable to control the quality of Crypto Assets
                  involved in any Transaction, the authenticity or accuracy of
                  the Transaction information, or the ability of each party to a
                  Transaction to fulfil each of their obligations in their
                  agreement. You are responsible for checking the trade details,
                  your trading counterparty’s details, the price and nature of
                  the Crypto Assets and/or your own risk appetite prior to
                  entering into any Transaction.
                </li>
              </ol>
            </li>
            <li>
              Using the Service
              <ol>
                <li>
                  Usage of the Service will incur fees (the{" "}
                  <strong>“Service Fees”</strong>). The Service Fees include:
                  <li>A percentage fee when Transactions occur; and</li>
                  <li>
                    Royalty fees.
                    <p class="css-lur2ps">
                      Details of the Service Fees can be found at: # (the{" "}
                      <strong>“Fee Schedule”</strong>). ClosedSea reserves the
                      right to make any changes to the Service Fees without
                      prior notice. Users are responsible for checking the Fee
                      Schedule regularly before executing any Transaction that
                      may incur Service Fees. The Service Fees will not include
                      third party fees that may arise out of or in connection
                      with the creation, sale or exchange of Crypto Assets.{" "}
                    </p>
                  </li>
                </li>
                <li>
                  You must provide all equipment and software necessary to
                  access the Platform and/or use the Service, including but not
                  limited to, a mobile device that is suitable to access the
                  Platform and/or use the Service. You are solely responsible
                  for any fees, including internet connection or mobile fees,
                  that you incur when using the Service.
                </li>
                <li>
                  You agree that ClosedSea assumes no responsibility and accepts
                  no liability to you or any third parties in connection with
                  any suspension, termination, cancellation or freezing of your
                  Account pursuant to section 6 below, and that on the
                  occurrence of such an event:
                  <ol>
                    <li>
                      ClosedSea is not obliged to keep or disclose to you any
                      information from within your Account;
                    </li>
                    <li>
                      Subject to our Privacy Policy, ClosedSea may continue to
                      keep your User Information (as defined in section 16.2)
                      and all the Transaction information from your use of the
                      Service;
                    </li>
                    <li>
                      ClosedSea has the right to delete unfulfilled Transactions
                      agreed with another user before suspension or termination;
                    </li>
                    <li>
                      You will immediately arrange to disconnect any Account you
                      have connected to the Platform. ClosedSea shall not be
                      responsible for any loss associated with your Account; and
                    </li>
                    <li>
                      All rights and licenses granted hereunder to you shall
                      terminate immediately and ClosedSea shall be entitled to
                      disconnect you from the Platform.
                    </li>
                  </ol>
                </li>
                <li>
                  You may only use the Service by linking your digital wallet on
                  supported bridge extensions such as MetaMask
                  (https://metamask.io/). We will ask you to download a
                  supported electronic wallet extension and connect and unlock
                  your digital wallets with that extension. Once you submit an
                  order to sell or purchase a Crypto Asset, your order is passed
                  on to the applicable extension, which completes the
                  Transaction on your behalf.{" "}
                </li>
                <li>
                  ALL TRANSACTIONS ON THE PLATFORM ARE FACILITATED AND RUN BY
                  THIRD-PARTY ELECTRONIC WALLET EXTENSIONS. BY USING THE
                  SERVICE, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE GOVERNED BY
                  THE TERMS OF SERVICE AND PRIVACY POLICY FOR THE APPLICABLE
                  EXTENSIONS. FOR METAMASK, THOSE TERMS ARE AVAILABLE AT
                  (https://metamask.io/terms.html) AND
                  (https://metamask.io/privacy.html).
                </li>
                <li>
                  The Service may not be available, or the Platform may not be
                  accessible depending on the user’s residence, geographic
                  location, and/or nationality (which may be determined by the
                  user’s IP address). If a user is located within one of the
                  jurisdictions listed in
                  https://home.treasury.gov/policy-issues/financial-sanctions/sanctions-programs-and-country-information
                  (collectively the <strong>“Restricted Jurisdiction”</strong>),
                  such users shall not be permitted to access the Platform
                  and/or use the Service.
                </li>
              </ol>
            </li>
            <li>
              Suspension of your use of Service
              <p class="css-lur2ps">
                You agree that ClosedSea has full discretion at any time, for
                any reason and without prior notification to you to suspend or
                terminate your access to the Platform and/or part or all of the
                Service, including but not limited to compliance with law, in
                response to a subpoena, court order or other binding
                governmental or regulatory order, or to enforce transaction
                limits and to temporarily or permanently freeze (cancel) your
                permission to use your Account.
              </p>
            </li>
            <li>
              Wallet and Security
              <ol>
                <li>
                  To use the Service, you will need to open an account (
                  <strong>“Account”</strong>) by connecting your wallet. After
                  connecting your wallet, you will be prompted for a signature
                  request for authentication. After signing and [ticking the box
                  that you have read and understood the Terms you will be
                  authenticated and your Account will be opened (the{" "}
                  <strong>“Procedure”</strong>).{" "}
                </li>
                <li>
                  You are solely responsible for the equipment, services,
                  software, applications, such as MetaMask or any third-party
                  product or service that you use to access your Account. You
                  are liable for all activities taking place in your Account,
                  including but not limited to information disclosure, online
                  agreements, or purchase of Crypto Assets or digital assets
                  from any service providers to your wallet. You must
                  immediately notify us if you discover or otherwise suspect any
                  security breaches related to your Account and/or the Service.
                  ClosedSea will block multiple Accounts of the same user.
                </li>
                <li>
                  You agree that you will not:
                  <ol>
                    <li>
                      Create another Account if we’ve disabled one you had
                      unless you have our written permission first;
                    </li>
                    <li>
                      Buy, sell, rent or lease access to your Account unless you
                      have our written permission first;
                    </li>
                    <li>Share your Account with anyone; and</li>
                    <li>
                      Log in or try to log in to access the Service through
                      unauthorized third-party applications or clients.
                    </li>
                  </ol>
                </li>
                <li>
                  You are solely responsible for keeping your Account secure.
                  You must utilise all reasonable efforts to protect your
                  Account, including without limitation, any unauthorised access
                  or use of personally identifiable information. We recommend
                  that you keep your Account password secure and always log-off
                  from the Platform when leaving the device through which you
                  accessed the Platform. You are advised to use various security
                  measures to protect your Account. In the event that your
                  Account is breached or compromised, you shall make
                  arrangements to protect your Account and/or discontinue any
                  connection between your Account and the Platform. You agree
                  and acknowledge that you are solely responsible for any
                  damages arising from or relating to any authorized or
                  unauthorized use of your Account.
                </li>
              </ol>
            </li>
            <li>
              Anti-Money Laundering
              <ol>
                <li>
                  ClosedSea may require you to provide additional information
                  and documents at the request of any competent authority or in
                  case of application of any applicable law or regulation,
                  including laws related to anti-money laundering, or for
                  counteracting financing of terrorism. ClosedSea may also
                  require you to provide additional information and documents in
                  cases where it has reasons to believe that:
                </li>
                <ol>
                  <li>
                    Your Account is being used for money laundering or for any
                    other illegal activity; or
                  </li>
                  <li>
                    Transactions performed via your Account were performed in
                    breach of these Terms.
                  </li>
                </ol>
                <li>
                  In such cases, ClosedSea, in its sole discretion, may pause or
                  cancel your Transactions and suspend your access to the
                  Platform and/or use of the Service until such additional
                  information and documents are reviewed by ClosedSea and
                  accepted as satisfying the requirements of the applicable law.
                  If you do not provide complete and accurate information and
                  documents in response to such a request within a reasonable
                  timeframe, your Account shall be terminated.{" "}
                </li>
              </ol>
            </li>
            <li>
              Communications
              <ol>
                <li>
                  By creating an Account, you consent to receive electronic
                  communications from ClosedSea (e.g., via email or by posting
                  notices to the Service). These communications may include
                  notices about your Account (e.g., such as transactional
                  information) and are part of your relationship with us. You
                  agree that any notices, agreements, disclosures, or other
                  communications that we send to you electronically will satisfy
                  any legal communication requirements, including, but not
                  limited to, that such communications be in writing. You should
                  maintain copies of electronic communications from us by
                  printing a paper copy or saving an electronic copy. We may
                  also send you promotional communications via email, including,
                  but not limited to, newsletters, special offers, surveys and
                  other news and information we think will be of interest to
                  you. You may opt out of receiving these promotional emails at
                  any time by contacting us at support@closedsea.co.
                </li>
                <li>
                  By submitting personal data to us, you agree to the terms of
                  our Privacy Policy and you expressly consent to the
                  collection, use and disclosure of your personal data in
                  accordance with the Privacy Policy.{" "}
                </li>
              </ol>
            </li>
            <li>
              Ownership
              <ol>
                <li>
                  Unless otherwise indicated in writing by us, the ClosedSea
                  logo and all designs, text, graphics, pictures, information,
                  data, software embodied (including all source and object code)
                  in the Service or Platform, sound files, other files and the
                  selection and arrangement thereof (collectively,{" "}
                  <strong>“Content”</strong>) are the proprietary property of
                  ClosedSea or our affiliates, licensors or users, as applicable
                  and is protected by copyright, trademark and other
                  intellectual property laws. Nothing in these Terms shall grant
                  the user any of such property rights and/or ownership rights
                  and shall not be an assignment of such rights.{" "}
                </li>
                <li>
                  Notwithstanding anything to the contrary in these Terms, the
                  Platform, Service, and Content may include software components
                  provided by ClosedSea or its affiliates or a third party that
                  are subject to separate license terms, in which case those
                  license terms will govern such software components.
                </li>
                <li>
                  The Content that may appear on the Service and/or Platform are
                  trademarks of ClosedSea or our affiliates and may not be
                  copied, imitated or used, in whole or in part, without our
                  prior written permission. You may not use any metatags or
                  other <strong>“hidden text”</strong>utilizing{" "}
                  <strong>“ClosedSea”</strong> or any other name, trademark or
                  product or service name of ClosedSea or our affiliates without
                  our prior written permission. In addition, the look and feel
                  of the Content, including, without limitation, all page
                  headers, custom graphics, button icons and scripts, constitute
                  the service mark, trademark or trade dress of ClosedSea and
                  may not be copied, imitated or used, in whole or in part,
                  without our prior written permission. All other trademarks,
                  registered trademarks, product names and ClosedSea names or
                  logos mentioned on the Platform are the property of their
                  respective owners and may not be copied, imitated or used, in
                  whole or in part, without the permission of the applicable
                  trademark holder. Reference to any products, services,
                  processes or other information by name, trademark,
                  manufacturer, supplier or otherwise does not constitute or
                  imply endorsement, sponsorship or recommendation by ClosedSea.
                </li>
                <li>
                  Any rights with respect to the Content which are not expressly
                  granted herein are reserved by ClosedSea.
                </li>
              </ol>
            </li>
            <li>
              License to Access the Platform and Use Our Service and Content
              <ol>
                <li>
                  You are hereby granted a limited, non-exclusive,
                  non-transferable, non-sublicensable, non-perpetual, personal
                  and revocable license to access the Platform, use the Service
                  and Content. However, the license is subject to these Terms
                  and does not include any right to:
                  <li>
                    sell, resell or commercially use the Service or Content;
                  </li>
                  <li>
                    distribute, publicly perform or publicly display any
                    Content;
                  </li>
                  <li>
                    modify or otherwise make any derivative uses of the Service
                    or Content, or any portion thereof;
                  </li>
                  <li>
                    use any data mining, robots or similar data gathering or
                    extraction methods;
                  </li>
                  <li>
                    download (other than page caching) any portion of the Site,
                    except as expressly permitted by us; and
                  </li>
                  <li>
                    use the Service or Content other than for their intended
                    purposes.
                  </li>
                </li>
                <li>
                  You shall not remove any copyright, trademark or other
                  proprietary notices that have been placed on the Site.
                </li>
                <li>
                  You shall not exploit the Service in any unauthorised way
                  whatsoever, including but not limited to trespass or
                  materially burden network capacity.
                </li>
              </ol>
            </li>
            <li>
              Hyperlinks
              <p class="css-lur2ps">
                You are granted a limited, nonexclusive, nontransferable right
                to create a text hyperlink through the Service for
                non-commercial purposes, provided that such link does not
                portray ClosedSea or our affiliates or any of our products or
                services in a false, misleading, derogatory or otherwise
                defamatory manner, and provided further that the linked site
                does not contain any adult or illegal material or any material
                that is offensive, harassing or otherwise objectionable. This
                limited right may be revoked at any time. You may not use a logo
                or other proprietary graphic of ClosedSea to link to the Service
                or Content without our express written permission. Further, you
                may not use, frame or utilize framing techniques to enclose any
                ClosedSea trademark, logo or other proprietary information,
                including the images found on the Platform, the content of any
                text or the layout or design of any page, or form contained on a
                page without our express written consent.
              </p>
            </li>
            <li>
              Notifications and Third-Party Service
              <ol>
                <li>
                  All of ClosedSea’s notifications will be made publicly known
                  at the Site. In the event that any notification relates to any
                  changes in the Service, the Platform, Fees and/or ClosedSea,
                  such notification shall be effective immediately upon being
                  posted on the Site. It is your sole responsibility to check
                  from time to time for new notifications on the Website.
                </li>
                <li>
                  Notwithstanding anything to the contrary in these Terms, the
                  Service and Content may include software components provided
                  by ClosedSea or its affiliates or a third party that are
                  subject to separate license terms, in which case those license
                  terms will govern such software components. For example, when
                  you click to get more details about any of the Crypto Assets
                  sold through the Platform, you will notice a third party link
                  to the website from which such Crypto Asset originated. Such
                  website may include license terms governing the use of such
                  Crypto Asset. In the event you purchase such Crypto Asset
                  through the Platform, you are required to comply with such
                  terms.
                </li>
                <li>
                  The Service may contain links to third-party websites (
                  <strong>“Third-Party Websites”</strong>) and applications
                  (“Third-Party Applications”). When you click on a link to a
                  Third-Party Website or Third-Party Application, we will not
                  warn you that you have left our Site. These Terms and policies
                  will no longer govern you and you will be subject to the terms
                  and conditions (including privacy policies) of the Third-Party
                  Website or destination. Such Third-Party Websites and
                  Third-Party Applications are not under the control of
                  ClosedSea. ClosedSea is not responsible for any Third-Party
                  Websites or Third-Party Applications. ClosedSea provides these
                  Third-Party Websites and Third-Party Applications only as a
                  convenience and does not review, approve, monitor, endorse,
                  warrant, or make any representations with respect to
                  Third-Party Websites or Third-Party Applications, or their
                  products or services. You use all links in Third-Party
                  Websites, and Third-Party Applications at your own risk. You
                  should review all applicable agreements and policies,
                  including privacy and data gathering practices, of any
                  Third-Party Websites or Third-Party Applications, and should
                  make whatever investigation you feel necessary or appropriate
                  before proceeding with any transaction with any third party.
                </li>
              </ol>
            </li>
            <li>
              User Conduct
              <ol>
                <li>
                  You agree that you will not violate any law, contract,
                  intellectual property or other third party right, and that you
                  are solely responsible for your conduct, while using the
                  Service. You agree that you will abide by these Terms and will
                  not:
                  <ol>
                    <li>
                      Provide false or misleading information to ClosedSea;
                    </li>
                    <li>
                      Create Crypto Asset names, listings and their
                      descriptions, smart contract names, and collections
                      including profanity or overtly sexual content;
                    </li>
                    <li>
                      Use or attempt to use another user’s account without
                      authorization from such user and ClosedSea;
                    </li>
                    <li>Create or list counterfeit items; </li>
                    <li>
                      Pose as another person or create a misleading username;
                    </li>
                    <li>
                      Use the Service in any manner that could interfere with,
                      disrupt, negatively affect or inhibit other users from
                      fully enjoying the Service, or that could damage, disable,
                      overburden or impair the functioning of the Service in any
                      manner;
                    </li>
                    <li>
                      Develop, utilize, or disseminate any software, or interact
                      with any Application Programming Interface (
                      <strong>“API”</strong>) in any manner, that could damage,
                      harm, or impair the Service;
                    </li>
                    <li>
                      Reverse engineer any aspect of the Service, or do anything
                      that might discover source code or bypass or circumvent
                      measures employed to prevent or limit access to any
                      Service, area or code of the Service;
                    </li>
                    <li>
                      Attempt to circumvent any content-filtering techniques we
                      employ, or attempt to access any feature or area of the
                      Platform and/or Service that you are not authorized to
                      access;
                    </li>
                    <li>
                      Use any robot, spider, crawler, scraper, script, browser
                      extension, offline reader or other automated means or
                      interface not authorized by us to access the Platform
                      and/or Service, extract data or otherwise interfere with
                      or modify the rendering of the Site’s pages or
                      functionality;
                    </li>
                    <li>
                      Use data collected from the Platform and/or Service to
                      contact individuals, companies, or other persons or
                      entities;
                    </li>
                    <li>
                      Use data collected from the Platform and/or Service for
                      any direct marketing activity (including without
                      limitation, email marketing, SMS marketing, telemarketing,
                      and direct marketing);
                    </li>
                    <li>
                      Bypass or ignore instructions that control all automated
                      access to the Platform and/or Service;
                    </li>
                    <li>
                      Use the Platform and/or Service for any illegal or
                      unauthorized purpose, or engage in, encourage or promote
                      any activity that violates these Terms;
                    </li>
                    <li>
                      Use the Network to carry out any illegal activities,
                      including but not limited to money laundering, terrorist
                      financing or deliberately engaging in activities designed
                      to adversely affect the performance of the Network, or the
                      Service;
                    </li>
                    <li>
                      Engage in wash trading or other deceptive or manipulative
                      trading activities on the Platform;
                    </li>
                    <li>Place misleading bids or offers;</li>
                    <li>
                      Use the Service to carry out any financial activities
                      subject to registration or licensing, including but not
                      limited to creating, listing, or buying securities,
                      commodities, options, real estate, or debt instruments; or{" "}
                    </li>
                    <li>
                      Use the Service to participate in fundraising for a
                      business, protocol, or platform, including but not limited
                      to creating, listing, or buying assets that are redeemable
                      for financial instruments, assets that give owners rights
                      to participate in an ICO or any securities offering, or
                      assets that entitle owners to financial rewards, including
                      but not limited to, DeFi yield bonuses, staking bonuses,
                      and burn discounts.
                    </li>
                  </ol>
                </li>
                <li>
                  ClosedSea facilitates trade among a diverse community of
                  buyers and sellers. Openness is one of our most prized values,
                  and we are committed to providing a Platform for the exchange
                  of Crypto Assets linked to controversial content. These
                  policies ensure that the Platform offers the widest selection
                  of assets possible while promoting trust and respect, as well
                  as adherence to the law. ClosedSea has always exercised
                  judgment in allowing or disallowing certain assets, listings,
                  smart contracts, and collections consistent with the spirit of
                  openness in a worldwide community of users of a radical new
                  technology. We carefully consider the complete situation and
                  all its details in light of our policies before deciding
                  whether to remove inappropriate assets, listings, smart
                  contracts, and collections when we discover them or they are
                  brought to our attention.{" "}
                </li>
                <li>
                  Crypto Assets linked to assets, listings, smart contracts, and
                  collections that ClosedSea deems inappropriate, disruptive, or
                  illegal are prohibited on ClosedSea. ClosedSea reserves the
                  right to determine the appropriateness of listings on its site
                  and remove any listing at any time. If you create or offer an
                  asset, listing, smart contract, or collection in violation of
                  these policies, we will take corrective actions, as
                  appropriate. ClosedSea cannot destroy or impound your assets
                  or smart contracts, but we reserve the right to destroy
                  inappropriate metadata stored on our servers (as applicable).
                </li>
                <li>
                  Crypto Assets linked to assets, listings, smart contracts, and
                  collections that include metadata that violates international
                  or Hong Kong intellectual property laws, promotes suicide or
                  self-harm, incites hate or violence against others, degrades
                  or doxes another individual, depicts minors in sexually
                  suggestive situations, or is otherwise illegal in Hong Kong
                  are prohibited on ClosedSea and will be removed.
                </li>
                <li>
                  Crypto Assets linked to assets, listings, smart contracts, and
                  collections created or used primarily or substantially for the
                  purpose of raising funds for the known terrorist organizations
                  listed in the notice of the United Nations (Anti-Terrorism
                  Measures) Ordinance (Cap. 575) as updated from time to time
                  (https://www.sb.gov.hk/eng/special/terrorist/terrorist.html)
                  and on the
                  https://www.state.gov/foreign-terrorist-organizations/ are
                  prohibited on the Platform and will be removed. The sale of
                  Crypto Assets linked to stolen assets, assets taken without
                  authorization, and otherwise illegally obtained assets on
                  ClosedSea is prohibited. If you have reason to believe that
                  any Crypto Asset on our Platform is linked to an asset that
                  was illegally obtained, please contact us immediately. Listing
                  any Crypto Asset linked to illegally obtained assets will
                  result in your listings being cancelled, your assets being
                  hidden, or your Account being suspended.{" "}
                </li>
              </ol>
            </li>
            <li>
              Age Restrictions and NSFW Content
              <ol>
                <li>
                  If the user is an individual, the user must be 18 years old or
                  older and possess the capacity to form a binding contract and
                  have the full capacity to accept these Terms, use the Service
                  and conduct any Transactions. Anyone under 18 years old may
                  use a parent or guardian's Account but only with permission
                  and involvement of the Account owner. The Account owner
                  assumes all associated risks and is responsible for everything
                  performed with that Account.{" "}
                </li>
                <li>
                  Crypto Assets linked to content that is{" "}
                  <strong>“Not Safe for Work”</strong> or<strong>“NSFW”</strong>{" "}
                  (<strong>“NSFW Content”</strong>) as defined and determined by
                  ClosedSea are meant for people who are 18 years and older. We
                  allow the sale of NSFW Content, but it is subject to being
                  marked NSFW and handled differently from non-NSFW Content in
                  navigation menus and search results. Crypto Assets that
                  contain NSFW Content are subject to being marked NSFW, even if
                  the NSFW Content only represents a portion of the content.
                  ClosedSea may remove NSFW Content not marked as{" "}
                  <strong>“NSFW”</strong> from the Platform at any time without
                  giving you prior notice.
                </li>
              </ol>
            </li>
            <li>
              User Information and Copyright
              <ol>
                <li>
                  You are solely responsible for your use of the Service and for
                  any User Information you provide, including compliance with
                  applicable laws, rules, and regulations. We take no
                  responsibility for the User Information posted or listed via
                  the Service. You retain your rights to any User Information
                  you submit, post, or display using the Service.
                </li>
                <li>
                  By submitting, posting or displaying User Information on or
                  through the Service, you grant us a worldwide, non-exclusive,
                  sublicensable, royalty-free license to use, copy, modify, and
                  display any text, content, files, communications, comments,
                  feedback, suggestions, ideas, concepts, questions, data or
                  other content that you submit or post on the Platform and/or
                  through the Service or through tools or applications we
                  provide for posting or sharing such content (collectively{" "}
                  <strong>“User Information”</strong>) for our lawful business
                  purposes, including to provide, promote, and improve the
                  Service. ClosedSea does not claim that submitting, posting or
                  displaying User Information on the Platform and/or through the
                  Service gives ClosedSea any ownership or resale rights in your
                  User Information.
                </li>
                <li>
                  You represent and warrant that you have, or have obtained, all
                  rights, licenses, consents, permissions, power and/or
                  authority necessary to grant the rights granted herein for any
                  User Information that you submit, post or display on the
                  Platform and/or through the Service. You agree that such User
                  Information will not contain material subject to copyright or
                  other proprietary rights, unless you have necessary permission
                  or are otherwise legally entitled to post the material and
                  grant to ClosedSea the license described above.
                </li>
                <li>
                  ClosedSea will remove content in response to formal
                  infringement claims at any time without prior notice to the
                  user and will terminate a user's access to the Service if the
                  user is a repeat infringer.
                </li>
                <li>
                  Formal infringement claims regarding content on the Service
                  must include:
                  <ol>
                    <li>
                      Written communication detailing C to G (
                      <strong>“Infringement Notice”</strong>) and addressed to
                      legal@closedsea.co.
                    </li>
                    <li>
                      A physical or electronic signature of someone authorized
                      to act on behalf of the copyright owner (if applicable);
                    </li>
                    <li>
                      Identification of the copyrighted work(s) allegedly
                      infringed;
                    </li>
                    <li>
                      Identification of material claimed to be infringing,
                      reasonably sufficient to permit ClosedSea to locate the
                      material;
                    </li>
                    <li>
                      Information reasonably sufficient to permit ClosedSea to
                      contact the complaining party. This can be an address,
                      phone number, email address, or other suitable method of
                      contact;
                    </li>
                    <li>
                      A statement that the “complaining party has a good faith
                      belief that use of the material in the manner complained
                      of is not authorized by the copyright owner, its agent or
                      the law”; and
                    </li>
                    <li>
                      A statement that the information in the Infringement
                      Notice is accurate and, under penalty of perjury, that the
                      complainant is authorized to act on behalf of copyright
                      owner.
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              Indemnification
              <p class="css-lur2ps">
                To the fullest extent permitted by applicable law, you agree to
                indemnify, defend and hold harmless ClosedSea, and our
                respective past, present and future employees, officers,
                directors, contractors, consultants, equity holders, suppliers,
                vendors, service providers, parent companies, subsidiaries,
                affiliates, agents, representatives, predecessors, successors
                and assigns (individually and collectively, the{" "}
                <strong>“ClosedSea Parties”</strong>), from and against all
                actual or alleged third party claims, damages, awards,
                judgments, losses, liabilities, obligations, penalties,
                interest, fees, expenses (including, without limitation,
                attorneys’ fees and expenses) and costs (including, without
                limitation, debt collection expenses, court costs, costs of
                settlement and costs of pursuing indemnification and insurance),
                of every kind and nature whatsoever, whether known or unknown,
                foreseen or unforeseen, matured or unmatured, or suspected or
                unsuspected, in law or equity, whether in tort, contract or
                otherwise (collectively, <strong>“Claims”</strong>), including,
                but not limited to, damages to property or personal injury, that
                are caused by, arise out of or are related to:
              </p>
              <ol>
                <li>
                  Your use or misuse of the Service, User Information or Crypto
                  Assets;
                </li>
                <li>Your participation in any Transaction</li>
                <li>
                  Any Representations and Warranties given by you being untrue;{" "}
                </li>
                <li>Any breach of any of these Terms; and</li>
                <li>
                  Any claim against you by any third-party, including another
                  user or MetaMask. You agree to promptly notify ClosedSea of
                  any third-party Claims and cooperate with the ClosedSea
                  Parties in defending such Claims. You further agree that the
                  ClosedSea Parties shall have control of the defense or
                  settlement of any third-party Claims. THIS INDEMNITY IS IN
                  ADDITION TO, AND NOT IN LIEU OF, ANY OTHER LEGAL RIGHTS
                  AVAILABLE TO US INCLUDING ANY OTHER INDEMNITIES SET FORTH IN A
                  WRITTEN AGREEMENT BETWEEN YOU AND CLOSEDSEA.
                </li>
              </ol>
            </li>
            <li>
              Disclaimers
              <ol>
                <li>
                  EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN WRITING BY
                  CLOSEDSEA, THE SERVICE, CONTENT CONTAINED THEREIN, AND CRYPTO
                  ASSETS LISTED THEREIN ARE PROVIDED ON AN{" "}
                  <strong>“AS IS”</strong> AND “AS AVAILABLE” BASIS WITHOUT
                  WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED. CLOSEDSEA MAKE NO WARRANTY THAT THE SERVICE: (A) WILL
                  MEET YOUR REQUIREMENTS; (B) WILL BE AVAILABLE ON AN
                  UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; OR (C)
                  WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR SAFE.
                  CLOSEDSEA DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS,
                  EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED
                  WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT AS TO THE
                  SERVICE, CONTENT CONTAINED THEREIN. WE WILL NOT BE LIABLE FOR
                  ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN
                  RELIANCE ON MATERIAL OR INFORMATION, CONTAINED ON THE
                  PLATFORM. WHILE CLOSEDSEA ATTEMPTS TO MAKE YOUR ACCESS TO AND
                  USE OF THE SERVICE AND CONTENT SAFE, CLOSEDSEA CANNOT AND DOES
                  NOT REPRESENT OR WARRANT THAT THE SERVICE, CONTENT, ANY CRYPTO
                  ASSETS LISTED ON OUR SERVICE OR OUR SERVERS ARE FREE OF
                  VIRUSES OR OTHER HARMFUL COMPONENTS. WE CANNOT GUARANTEE THE
                  SECURITY OF ANY DATA THAT YOU DISCLOSE ONLINE. YOU ACCEPT THE
                  INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING
                  ONLINE OVER THE INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR
                  ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS
                  NEGLIGENCE.
                </li>
                <li>
                  GIVEN THAT THE PLATFORM IS OPERATING IN A DECENTRALIZED
                  MANNER, THERE WILL BE MINIMUM INTERFERENCE FROM CLOSEDSEA IN
                  THE OPERATION OF THE PLATFORM. ONCE A TRANSACTION HAS BEEN
                  INITIATED BY A USER THAT RESULTS IN A BROADCAST TO THE
                  NETWORK, IT WILL NOT BE POSSIBLE NOR WOULD IT BE CLOSEDSEA’S
                  RESPONSIBILITY TO HALT ANY TRANSACTION SHOULD THE USER
                  SUBSEQUENTLY DISCOVER THAT THE TRANSACTION HAS BEEN MADE TO AN
                  INCORRECT WALLET ADDRESS. IT IS YOUR RESPONSIBILITY TO CHECK
                  ALL DETAILS OF THE TRANSACTION PRIOR TO PROCEEDING.{" "}
                </li>
                <li>
                  YOU ACCEPT RESPONSIBILITIES FOR ALL YOUR ACTIVITIES AND
                  CONTENTS ON THE PLATFORM INCLUDING TRANSACTIONS. YOU FURTHER
                  ACKNOWLEDGE THAT CLOSEDSEA DOES NOT ACT AS YOUR BROKER,
                  INTERMEDIARY, AGENT, ADVISOR OR CREDITOR WITH RESPECT TO ANY
                  TRANSACTION YOU AKE OR PROPOSE TO MAKE ON THE PLATFORM AND
                  OWES YOU NO FIDUCIARY DUTY. ANY COMMUNICATION BY CLOSEDSEA TO
                  YOU SHALL NOT BE CONSTRUED UNDER ANY CIRCUMSTANCES AS LEGAL,
                  TAX, ACCOUNTING OR FINANCIAL ADVICE.
                </li>
                <li>
                  CLOSEDSEA ONLY PROVIDES A PLATFORM TO FACILITATE TRANSACTIONS
                  BETWEEN THE BUYER AND SELLER BUT IS NOT A PARTY TO ANY
                  TRANSACTION OR AGREEMENT BETWEEN THE BUYER AND SELLER OF
                  CRYPTO ASSETS OR BETWEEN ANY USERS. YOU BEAR FULL
                  RESPONSIBILITY FOR VERIFYING THE IDENTITY, LEGITIMACY, AND
                  AUTHENTICITY OF CRYPTO ASSETS YOU PURCHASE ON THE PLATFORM.
                  NOTWITHSTANDING INDICATORS AND MESSAGES THAT SUGGEST
                  VERIFICATION, CLOSEDSEA MAKES NO CLAIMS ABOUT THE IDENTITY,
                  LEGITIMACY, OR AUTHENTICITY OF CRYPTO ASSETS ON THE PLATFORM.
                </li>
                <li>
                  WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSS AND
                  TAKE NO RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO YOU FOR,
                  ANY USE OF CRYPTO ASSETS, INCLUDING BUT NOT LIMITED TO ANY
                  LOSSES, DAMAGES OR CLAIMS ARISING FROM:
                  <ol>
                    <li>
                      USER ERROR SUCH AS FORGOTTEN PASSWORDS, INCORRECTLY
                      CONSTRUCTED TRANSACTIONS, OR MISTYPED ADDRESSES;{" "}
                    </li>
                    <li>SERVER FAILURE OR DATA LOSS; </li>
                    <li>CORRUPTED WALLET FILES; </li>
                    <li>UNAUTHORIZED ACCESS TO YOUR ACCOUNT; OR</li>
                    <li>
                      ANY UNAUTHORIZED THIRD PARTY ACTIVITIES, INCLUDING WITHOUT
                      LIMITATION THE USE OF VIRUSES, PHISHING, BRUTEFORCING OR
                      OTHER MEANS OF ATTACK AGAINST THE SERVICE OR CRYPTO
                      ASSETS.
                    </li>
                  </ol>
                </li>
                <li>
                  CRYPTO ASSETS ARE INTANGIBLE DIGITAL ASSETS. THEY EXIST ONLY
                  BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE NETWORK.
                  ANY TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY UNIQUE DIGITAL
                  ASSET OCCURS ON THE DECENTRALIZED LEDGER WITHIN THE NETWORK.
                  WE DO NOT GUARANTEE THAT CLOSEDSEA OR ANY CLOSEDSEA PARTY CAN
                  EFFECT THE TRANSFER OF TITLE OR RIGHT IN ANY CRYPTO ASSETS.
                </li>
                <li>
                  CLOSEDSEA IS NOT RESPONSIBLE FOR LOSSES ARISING OUT OF OR
                  RELATING TO VULNERABILITY OR ANY KIND OF FAILURE, ABNORMAL
                  BEHAVIOR OF SOFTWARE (E.G., WALLET, SMART CONTRACT),
                  BLOCKCHAINS OR ANY OTHER FEATURES OF THE CRYPTO ASSETS.
                  CLOSEDSEA IS NOT RESPONSIBLE FOR LOSSES ARISING OUT OF OR
                  RELATING TO LATE REPORT BY DEVELOPERS OR REPRESENTATIVES (OR
                  NO REPORT AT ALL) OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING
                  CRYPTO ASSETS INCLUDING FORKS, TECHNICAL NODE ISSUES OR ANY
                  OTHER ISSUES HAVING FUND LOSSES AS A RESULT.
                </li>
                <li>
                  THE CHARACTERISTICS OF THE CRYPTO ASSETS CREATED THROUGH THE
                  SERVICE ON OUR PLATFORM SHALL BE DETERMINED BY THE CREATOR.
                  CLOSEDSEA HAS NO INVOLVEMENT OR RESPONSIBILITY IN THE DESIGN
                  OF THE CRYPTO ASSET.{" "}
                </li>
              </ol>
            </li>
            <li>
              Assumption of Risk You accept and acknowledge:
              <ol>
                <li>
                  The prices of blockchain assets are extremely volatile.
                  Fluctuations in the price of other digital assets could
                  materially and adversely affect the Crypto Assets, which may
                  also be subject to significant price volatility. We cannot
                  guarantee that any purchasers of Crypto Assets will not lose
                  money.
                </li>
                <li>
                  You are solely responsible for determining what, if any, taxes
                  apply to your Transactions which includes, but is not limited
                  to any income, profit and/or capital gains tax. Neither
                  ClosedSea nor any other ClosedSea Party is responsible for
                  determining the taxes that apply to Transactions nor will they
                  provide any tax related information to the users.
                </li>
                <li>
                  ClosedSea does not store, send, or receive Crypto Assets. This
                  is because Crypto Assets exist only by virtue of the ownership
                  record maintained on its supporting blockchain. Any transfer
                  of Crypto Assets occurs within the supporting blockchain and
                  not on this Service.
                </li>
                <li>
                  There are risks associated with using an Internet based
                  currency, including but not limited to, the risk of hardware,
                  software and Internet connections, the risk of malicious
                  software introduction, and the risk that third parties may
                  obtain unauthorized access to information stored within your
                  Account. You accept and acknowledge that ClosedSea will not be
                  responsible for any communication failures, disruptions,
                  errors, distortions or delays you may experience when using
                  the Service, however caused.
                </li>
                <li>
                  A lack of use or public interest in the creation and
                  development of distributed ecosystems could negatively impact
                  the development of those ecosystems and related applications
                  and could therefore also negatively impact the potential
                  utility or value of Crypto Assets.
                </li>
                <li>
                  The regulatory regime governing blockchain technologies,
                  cryptocurrencies, and tokens is uncertain, and new regulations
                  or policies may materially adversely affect the development of
                  the Service and the utility of Crypto Assets.
                </li>
                <li>
                  The Service will rely on third-party platforms such as
                  MetaMask to perform the Transactions. If:
                  <ol>
                    <li>
                      we are unable to maintain a good relationship with such
                      platform providers;
                    </li>
                    <li>
                      the terms and conditions or pricing of such platform
                      providers change;{" "}
                    </li>
                    <li>
                      we violate or cannot comply with the terms and conditions
                      of such platforms; or{" "}
                    </li>
                    <li>
                      if any of such platforms loses market share or falls out
                      of favor or is unavailable for a prolonged period of time,
                      access to and use of the Service will suffer.
                    </li>
                  </ol>
                </li>
                <li>
                  There are risks associated with purchasing Crypto Assets,
                  including but not limited to, the risk of purchasing
                  counterfeit assets, mislabeled assets, assets that are
                  vulnerable to metadata decay, assets on smart contracts with
                  bugs, and assets that may become untransferable. ClosedSea
                  reserves the right to hide collections, contracts, and Crypto
                  Assets affected by any of these issues or by other issues.
                  Crypto Assets you purchase may become inaccessible on
                  ClosedSea. Under no circumstances shall the inability to view
                  your assets on ClosedSea serve as grounds for a claim against
                  ClosedSea.
                </li>
              </ol>
            </li>
            <li>
              Limitation of Liability
              <ol>
                <li>
                  WE WILL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
                  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR
                  EXEMPLARY DAMAGES (INCLUDING DAMAGES FOR LOSS OF PROFITS,
                  GOODWILL, USE, OR DATA), EVEN IF A PARTY HAS BEEN ADVISED OF
                  THE POSSIBILITY OF SUCH DAMAGES. FURTHER, WE WILL NOT BE
                  RESPONSIBLE FOR ANY COMPENSATION, REIMBURSEMENT, OR DAMAGES
                  ARISING IN CONNECTION WITH YOUR INABILITY TO USE THE SERVICE
                  OR PLATFORM, INCLUDING AS A RESULT OF:
                  <ol>
                    <li>ANY TERMINATION OR SUSPENSION OF THE SERVICE; </li>
                    <li>
                      OUR DISCONTINUATION OF ANY OR ALL OF THE SERVICE AND/OR
                      PLATFORM; OR{" "}
                    </li>
                    <li>
                      WITHOUT LIMITING ANY OBLIGATIONS UNDER ANY SEPARATELY
                      AGREED SERVICE-LEVEL AGREEMENTS, ANY UNANTICIPATED OR
                      UNSCHEDULED DOWNTIME OF ALL OR A PORTION OF THE PLATFORM
                      AND/OR SERVICE OR PLATFORM FOR ANY REASON, INCLUDING AS A
                      RESULT OF:
                      <ol>
                        <li>
                          POWER OUTAGES, SYSTEM FAILURES OR OTHER INTERRUPTIONS;
                        </li>
                        <li>
                          THE COST OF PROCUREMENT OF SUBSTITUTE GOODS OR THE
                          SERVICE OR PLATFORM;{" "}
                        </li>
                        <li>
                          ANY INVESTMENTS, EXPENDITURES, OR COMMITMENTS BY YOU
                          OR YOUR USE OF OR ACCESS TO THE SERVICE OR THE
                          PLATFORM; OR{" "}
                        </li>
                        <li>
                          ANY UNAUTHORIZED ACCESS TO, ALTERATION OF, OR THE
                          DELETION, DESTRUCTION, DAMAGE, LOSS OR FAILURE TO
                          STORE ANY OF YOUR CONTENT OR OTHER DATA.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN
                  NO EVENT SHALL THE MAXIMUM AGGREGATE LIABILITY OF CLOSEDSEA
                  ARISING OUT OF OR IN ANY WAY RELATED TO THESE TERMS, THE
                  ACCESS TO THE PLATFORM AND/OR USE OF THE SERVICE, CONTENT,
                  CRYPTO ASSETS, OR ANY CRYPTO ASSETS PURCHASED ON THE PLATFORM
                  EXCEED THE AMOUNT RECEIVED BY CLOSEDSEA FROM THE SALE OF
                  CRYPTO ASSETS ON THE PLATFORM THAT ARE THE SUBJECT OF THE
                  CLAIM. THE FOREGOING LIMITATIONS OF LIABILITY SHALL NOT APPLY
                  TO:
                  <ol>
                    <li>
                      DEATH OR PERSONAL INJURY CAUSED BY CLOSEDSEA OR CLOSEDSEA
                      PARTIES’ NEGLIGENCE; OR{" "}
                    </li>
                    <li>
                      ANY INJURY CAUSED BY A CLOSEDSEA OR CLOSEDSEA PARTIES’
                      FRAUD OR FRAUDULENT MISREPRESENTATION.
                    </li>
                  </ol>
                </li>
                <li>
                  NOTHING IN THESE TERMS SHALL EXCLUDE OR LIMIT LIABILITY OF
                  EITHER PARTY FOR FRAUD, DEATH OR BODILY INJURY CAUSED BY
                  NEGLIGENCE, VIOLATION OF LAWS, OR ANY OTHER ACTIVITY THAT
                  CANNOT BE LIMITED OR EXCLUDED BY LEGITIMATE MEANS.
                </li>
                <li>
                  Some jurisdictions do not allow the exclusion or limitation of
                  incidental or consequential damages, so the above limitation
                  or exclusion may not apply to you. Some jurisdictions also
                  limit disclaimers or limitations of liability for personal
                  injury from consumer products, so this limitation may not
                  apply to personal injury claims.
                </li>
              </ol>
            </li>
            <li>
              Assignment
              <p class="css-lur2ps">
                You may not assign or transfer any of your obligations or rights
                without the written consent from ClosedSea.
              </p>
            </li>
            <li>
              Force Majeure
              <p class="css-lur2ps">
                ClosedSea shall not be liable for any delay or failure to
                perform its obligations under these Terms which is caused by an
                event or sequence of events beyond its reasonable control. Such
                events shall include acts of God, flood, drought, earthquake or
                other natural disaster; disease, epidemic or pandemic such as
                COVID-19 and the lockdown of territories or states as a result
                of the pandemic; terrorist attack, civil war, civil commotion or
                riots, war, threat of or preparation for war, armed conflict,
                imposition of sanctions, embargo, or breaking off of diplomatic
                relations; nuclear, chemical or biological contamination; any
                law or any action taken by a government or public authority,
                including without limitation imposing an export or import
                restriction, quota or prohibition, or failing to grant or renew
                a necessary licence or consent; collapse of buildings, fire,
                explosion or accident; any labour or trade dispute, strikes,
                industrial action or lockouts; and interruption or failure of
                utility service.
              </p>
            </li>
            <li>
              Headings
              <p class="css-lur2ps">
                Headings are inserted for convenience and not to be used when
                interpreting the Terms.
              </p>
            </li>
            <li>
              Language
              <p class="css-lur2ps">
                Notwithstanding any other provision of these Terms, any
                translation of the Terms is provided for your convenience. The
                meanings of terms, conditions and representations herein are
                subject to definitions and interpretations in English. You agree
                that in the event of any conflict between the English version of
                the foregoing documents and any other translations, the English
                version shall prevail.
              </p>
            </li>
            <li>
              No Partnership
              <p class="css-lur2ps">
                ClosedSea and the user are and intend to remain independent
                parties. Nothing in these Terms shall be deemed or construed to
                create the relationship of a principal and agent or partnership
                or joint venture, or that of an employee and employer between
                ClosedSea and the user and ClosedSea shall not assume any
                fiduciary duties to the user.
              </p>
            </li>
            <li>
              Governing Law and Venue
              <p class="css-lur2ps">
                These Terms, your access to and use of the Service and Content,
                and your participation in the Auction shall be governed by the
                laws of Hong Kong Special Administrative Region as to all
                matters including validity, construction, effect, performance
                and remedies without regard to the conflict of law rules or
                principles of any other jurisdiction).
              </p>
            </li>
            <li>
              Dispute Resolution; Arbitration.
              <p class="css-lur2ps">
                Any dispute which cannot be resolved as provided in paragraph 26
                above shall be referred to and finally resolved by arbitration
                administered by the Hong Kong International Arbitration Centre
                (HKIAC) under the UNCITRAL Arbitration Rules in force when the
                Notice of Arbitration is submitted, as modified by the HKIAC
                Procedures for the Administration of International Arbitration.
                The law of this arbitration clause shall be Hong Kong law. The
                place of arbitration shall be Hong Kong. The number of
                arbitrators shall [1]. The arbitration proceedings shall be
                conducted in English.{" "}
              </p>
            </li>
            <li>
              Termination
              <p class="css-lur2ps">
                Notwithstanding anything contained in these Terms, we reserve
                the right, without notice and in our sole discretion, to
                terminate your right to access or use the Service at any time
                and for any or no reason, and you acknowledge and agree that we
                shall have no liability or obligation to you in such event and
                that you will not be entitled to a refund of any amounts that
                you have already paid to us, to the fullest extent permitted by
                applicable law.
              </p>
            </li>
            <li>
              Severability
              <p class="css-lur2ps">
                If any term, clause or provision of these Terms is held invalid
                or unenforceable, then that term, clause or provision will be
                severable from these Terms and will not affect the validity or
                enforceability of any remaining part of that term, clause or
                provision, or any other term, clause or provision of these
                Terms.
              </p>
            </li>
            <li>
              Survival
              <p class="css-lur2ps">
                The following sections will survive the expiration or
                termination of these Terms and the termination of your Account:
                all defined terms and Sections 1-3 and 7-32.
              </p>
            </li>
            <li>
              Third Party Rights
              <p class="css-lur2ps">
                The provisions of the Contracts (Rights of Third Parties)
                Ordinance (Cap. 623) of the laws of Hong Kong are hereby
                expressly excluded from these Terms and/or any other documents
                issued pursuant thereto.
              </p>
            </li>
            <li>
              Miscellaneous
              <p class="css-lur2ps">
                These Terms, together with the Privacy Policy, constitute the
                entire agreement between you and ClosedSea relating to your
                access to the Platform and use of the Service. These Terms, and
                any rights and licenses granted hereunder, may not be
                transferred or assigned by you without the prior written consent
                of ClosedSea prior, concurrent or subsequent circumstance, and
                ClosedSea’s failure to assert any right or provision under these
                Terms shall not constitute a waiver of such right or provision.
                Except as otherwise provided herein, these Terms are intended
                solely for the benefit of the parties and are not intended to
                confer third-party beneficiary rights upon any other person or
                entity.
              </p>
            </li>
          </ol>
        </div>
        {/* <div className={styles.row}>
          <div className={styles.col}>
            {items
              .find((x) => x.title === direction)
              .items.map((x, index) => (
                <Item className={styles.item} item={x} key={index} />
              ))}
          </div>

          <div className={styles.col}>
            {items
              .find((x) => x.title === direction)
              .items.map((x, index) => (
                <Item className={styles.item} item={x} key={index} />
              ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
