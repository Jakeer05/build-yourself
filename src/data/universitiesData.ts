import { UniversityProgram, StudyAbroadCountryGuide, University } from '../types';
import { germanyUniversities } from './universities/germany';
import { usaUniversities } from './universities/usa';
import { netherlandsUniversities } from './universities/netherlands';
import { ukUniversities } from './universities/uk';
import { canadaUniversities } from './universities/canada';
import { singaporeUniversities } from './universities/singapore';
import { austriaUniversities } from './universities/austria';
import { australiaUniversities } from './universities/australia';
import { newzealandUniversities } from './universities/newzealand';
import { italyUniversities } from './universities/italy';
import { chinaUniversities } from './universities/china';
import { japanUniversities } from './universities/japan';
import { spainUniversities } from './universities/spain';
import { franceUniversities } from './universities/france';
import { luxembourgUniversities } from './universities/luxembourg';
import { switzerlandUniversities } from './universities/switzerland';

export {
  germanyUniversities,
  usaUniversities,
  netherlandsUniversities,
  ukUniversities,
  canadaUniversities,
  singaporeUniversities,
  austriaUniversities,
  australiaUniversities,
  newzealandUniversities,
  italyUniversities,
  chinaUniversities,
  japanUniversities,
  spainUniversities,
  franceUniversities,
  luxembourgUniversities,
  switzerlandUniversities
};

export const comprehensiveUniversities: University[] = [
  ...germanyUniversities,
  ...usaUniversities,
  ...netherlandsUniversities,
  ...ukUniversities,
  ...canadaUniversities,
  ...singaporeUniversities,
  ...austriaUniversities,
  ...australiaUniversities,
  ...newzealandUniversities,
  ...italyUniversities,
  ...chinaUniversities,
  ...japanUniversities,
  ...spainUniversities,
  ...franceUniversities,
  ...luxembourgUniversities,
  ...switzerlandUniversities
];

// Helper to convert rich University models into flat UniversityProgram models for cards, tables, and search
function convertUniversitiesToPrograms(unis: University[]): UniversityProgram[] {
  const result: UniversityProgram[] = [];

  for (const uni of unis) {
    const allProgSummaries = (uni.programs || []).map(p => ({
      id: p.id,
      name: p.name,
      degree: p.degree,
      field: p.field,
      duration: p.duration,
      tuition: p.tuition,
      deadline: p.deadlines && p.deadlines.length > 0 ? p.deadlines[0].deadline : 'Rolling Admissions'
    }));

    for (const prog of uni.programs || []) {
      const durMatch = prog.duration.match(/\d+/);
      const durationMonths = durMatch ? parseInt(durMatch[0], 10) : 24;

      const programItem: UniversityProgram = {
        id: prog.id,
        universityName: uni.name,
        shortName: uni.shortName,
        location: `${uni.city}, ${uni.state}`,
        city: uni.city,
        country: uni.country,
        flag: uni.flag,
        programName: prog.name,
        degree: (prog.degree as any) || 'MSc',
        field: prog.field,
        durationMonths: durationMonths,
        duration: prog.duration,
        semesters: prog.semesters,
        credits: prog.credits,
        language: prog.language,
        studyMode: prog.studyMode,
        tuitionFee: prog.tuition,
        tuitionNumericalUSD: prog.tuitionNumericalUSD,
        semesterFee: prog.semesterFee,
        applicationFee: prog.applicationFee,
        intakes: prog.intakes,
        deadlines: prog.deadlines,
        upcomingDeadline: prog.deadlines && prog.deadlines.length > 0 ? prog.deadlines[0].deadline : 'Rolling Admissions',
        ieltsRequirement: prog.ielts,
        toeflRequirement: prog.toefl,
        greRequirement: prog.gre,
        gmatRequirement: prog.gmat,
        gpaRequirement: prog.gpa,
        publicPrivate: uni.type.toLowerCase().includes('private') ? 'Private' : 'Public',
        officialWebsiteUrl: uni.officialWebsite,
        programUrl: prog.officialProgramUrl || uni.officialWebsite,
        admissionsUrl: uni.officialAdmissionsUrl,
        rankingOrganization: uni.rankingOrganization || 'QS World University Rankings 2025',
        rankingScore: uni.rankingScore || '#Top 100 Global',
        scholarshipsAvailable: prog.scholarships || 'Merit and Government Scholarships Available',
        estimatedLivingCostAnnual: uni.estimatedLivingCostAnnual || '$15,000 / yr',
        workPermitYears: uni.workPermitYears || 'Post-Study Work Visa Available',
        source: prog.sourceType || uni.sourceType || 'Official University',
        sourceType: (prog.sourceType as any) || (uni.sourceType as any) || 'Official University',
        sourceUrl: prog.officialProgramUrl || uni.officialWebsite,
        lastVerifiedDate: prog.lastVerified || uni.lastVerified || '2024-2025 Academic Cycle',
        verifiedStatus: 'Verified Official',
        highlights: [
          prog.eligibility,
          prog.curriculum,
          prog.careerInfo
        ],
        coreModules: prog.coreModules,
        electives: prog.electives,
        project: prog.project,
        thesis: prog.thesis,
        internship: prog.internship,
        careerInfo: prog.careerInfo,
        documents: prog.documents,
        allPrograms: allProgSummaries
      };

      result.push(programItem);
    }
  }

  return result;
}

export const initialUniversities: UniversityProgram[] = convertUniversitiesToPrograms(comprehensiveUniversities);

export const countryGuides: StudyAbroadCountryGuide[] = [
  // 1. GERMANY
  {
    id: 'guide-germany',
    country: 'Germany',
    flag: '🇩🇪',
    overview: 'Germany is the premier European destination for engineering, computer science, and data master’s degrees. Almost all public universities charge ZERO tuition fees for all students (or modest semester contributions), providing incredible ROI and robust career prospects.',
    tuitionOverview: 'Public universities: €0 tuition (except state of Baden-Württemberg: €1,500/sem & TUM non-EU fees). Semester ticket fee: €250 - €380/semester.',
    avgLivingCostPerYear: '€11,904 / year (€992 / month)',
    languageRequirements: 'For English-taught masters: IELTS 6.5+ or TOEFL 90+. German proficiency (A1-B1) strongly recommended for daily living, part-time student jobs (Werkstudent), and long-term permanent residency.',
    blockedAccountRequired: true,
    blockedAccountAmount: '€11,904 (standard mandated amount across Fintiba / Expatrio / Coracle)',
    visaProcessSummary: 'Apply via German Mission / VFS. Key mandatory requirements include University Zulassung (Offer), Blocked Account confirmation, Health Insurance (TK / Barmer / Mawista), and APS Certificate for applicants from India, China, and Vietnam.',
    postStudyWorkVisa: '18-month Job Seeker Visa with full work authorization. PR eligible after 21-24 months of working with B1 German and paying pension contributions.',
    prEligibility: 'EU Blue Card pathway: Fast-track permanent residency in 21 months with B1 German, or 27 months with A1 German.',
    officialImmigrationUrl: 'https://www.make-it-in-germany.com/en/study-training/studies-in-germany',
    keyChecklist: [
      { item: 'Valid Passport', category: 'Special', requirementType: 'Required', description: 'Valid for at least 12 months beyond intended stay.', officialSourceUrl: 'https://www.make-it-in-germany.com' },
      { item: 'Bachelor’s Degree & Transcripts', category: 'Academic', requirementType: 'Required', description: 'Original transcripts translated, notarized, and aligned to ECTS curricular credits.', officialSourceUrl: 'https://www.uni-assist.de/en/' },
      { item: 'APS Certificate (Akademische Prüfstelle)', category: 'Special', requirementType: 'Required', description: 'Mandatory verification of Indian, Chinese, and Vietnamese academic records before German student visa submission.', officialSourceUrl: 'https://aps-india.info' },
      { item: 'Blocked Bank Account (€11,904)', category: 'Financial', requirementType: 'Required', description: 'Proof of subsistence deposited in a restricted escrow account that disburses monthly living funds.', officialSourceUrl: 'https://www.auswaertiges-amt.de' },
      { item: 'IELTS / TOEFL Official Scorecard', category: 'Language', requirementType: 'Required', description: 'Academic score sent directly to uni-assist or the university department.', officialSourceUrl: 'https://www.ielts.org' },
      { item: 'Statement of Purpose (SOP) & Curriculum Vitae (CV)', category: 'Academic', requirementType: 'Required', description: 'Academic CV in European Europass format and tailored motivation statement.', officialSourceUrl: 'https://www.daad.de' },
      { item: 'German Statutory Health Insurance', category: 'Visa', requirementType: 'Required', description: 'Mandatory proof of student health coverage (TK, Barmer, or equivalent) for university enrollment.', officialSourceUrl: 'https://www.daad.de' },
      { item: 'University Zulassung (Offer Letter)', category: 'Academic', requirementType: 'Required', description: 'Official admission letter from an accredited German higher education institution.', officialSourceUrl: 'https://www.hochschulkompass.de' }
    ]
  },

  // 2. UNITED STATES
  {
    id: 'guide-usa',
    country: 'USA',
    flag: '🇺🇸',
    overview: 'The United States offers the world’s most comprehensive tech ecosystem, premier research laboratories, venture funding, and highest starting salaries in software, AI, and analytics.',
    tuitionOverview: 'Average MS tuition ranges between $28,000 - $60,000 per year depending on public vs private status.',
    avgLivingCostPerYear: '$18,000 - $30,000 / year depending on location and living arrangements.',
    languageRequirements: 'TOEFL iBT (90-105) or IELTS Academic (7.0 - 7.5). GRE required by some programs, optional/waived in many.',
    blockedAccountRequired: false,
    visaProcessSummary: 'Secure Form I-20 from university, pay SEVIS I-901 fee ($350), complete DS-160 online form, and schedule F-1 visa interview at US Embassy/Consulate.',
    postStudyWorkVisa: 'Up to 3 Years STEM OPT (12 months standard Optional Practical Training + 24 months STEM extension) enabling full-time US employment.',
    prEligibility: 'H-1B Specialty Occupation visa lottery or O-1 Extraordinary Ability, leading to EB-2/EB-3 permanent residency (Green Card).',
    officialImmigrationUrl: 'https://studyinthestates.dhs.gov/',
    keyChecklist: [
      { item: 'Valid Passport', category: 'Special', requirementType: 'Required', description: 'Valid for at least 6 months past intended US entry.', officialSourceUrl: 'https://travel.state.gov' },
      { item: 'Form I-20 (Certificate of Eligibility)', category: 'Visa', requirementType: 'Required', description: 'Issued by SEVP-certified institution verifying admission and financial solvency.', officialSourceUrl: 'https://studyinthestates.dhs.gov' },
      { item: 'SEVIS Fee Payment (Form I-901)', category: 'Visa', requirementType: 'Required', description: 'Mandatory $350 government fee registered prior to US Embassy interview.', officialSourceUrl: 'https://www.fmjfee.com' },
      { item: 'Bank Financial Solvency Statement', category: 'Financial', requirementType: 'Required', description: 'Proof of liquid funds covering full 1st year tuition and living estimates.', officialSourceUrl: 'https://studyinthestates.dhs.gov' },
      { item: 'Statement of Purpose (SOP) & 3 LORs', category: 'Academic', requirementType: 'Required', description: 'Detailed research motivation and 3 academic/professional recommendation letters.', officialSourceUrl: 'https://gradadmissions.stanford.edu' },
      { item: 'IELTS / TOEFL Official Scorecard', category: 'Language', requirementType: 'Required', description: 'Official electronic score reports sent via testing agency codes.', officialSourceUrl: 'https://www.ets.org' },
      { item: 'DS-160 Visa Application Confirmation', category: 'Visa', requirementType: 'Required', description: 'Online nonimmigrant visa application confirmation barcode.', officialSourceUrl: 'https://ceac.state.gov' }
    ]
  },

  // 3. UNITED KINGDOM
  {
    id: 'guide-uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    overview: 'The UK is home to centuries-old collegiate universities, 1-year intensive master’s programs, and a direct 2-year post-study work visa (Graduate Route).',
    tuitionOverview: 'Average master’s tuition ranges from £18,000 to £38,000 per 1-year program.',
    avgLivingCostPerYear: '£12,000 - £16,000 / year (higher in London ~£15,000 minimum by UKVI).',
    languageRequirements: 'IELTS Academic UKVI (6.5 - 7.5) or PTE Academic.',
    blockedAccountRequired: false,
    visaProcessSummary: 'Obtain CAS (Confirmation of Acceptance for Studies) from university, prove 28-day continuous funds, and apply for UK Student Visa.',
    postStudyWorkVisa: '2-Year Graduate Route post-study work visa without employer sponsorship requirements.',
    prEligibility: 'Skilled Worker Visa route after Graduate Route leading to Indefinite Leave to Remain (ILR) after 5 years.',
    officialImmigrationUrl: 'https://www.gov.uk/student-visa',
    keyChecklist: [
      { item: 'CAS Letter (Confirmation of Acceptance)', category: 'Academic', requirementType: 'Required', description: 'Unique electronic reference number issued by sponsor university.', officialSourceUrl: 'https://www.gov.uk/student-visa' },
      { item: 'Bank Proof of Funds (28-day rule)', category: 'Financial', requirementType: 'Required', description: 'Strict 28-day holding requirement for living costs and unpaid tuition.', officialSourceUrl: 'https://www.gov.uk' },
      { item: 'IELTS Academic Scorecard', category: 'Language', requirementType: 'Required', description: 'Required minimum English qualification.', officialSourceUrl: 'https://www.ielts.org' },
      { item: 'TB Screening Certificate', category: 'Visa', requirementType: 'Required', description: 'Tuberculosis test from IOM approved clinic for designated countries.', officialSourceUrl: 'https://www.gov.uk' }
    ]
  },

  // 4. NETHERLANDS
  {
    id: 'guide-netherlands',
    country: 'Netherlands',
    flag: '🇳🇱',
    overview: 'The Netherlands offers over 2,100 English-taught university programs, cutting-edge technical innovation (ASML, Philips, Booking.com), and the 1-year "Zoekjaar" search year visa.',
    tuitionOverview: '€16,000 - €23,000 / year for Non-EU students; €2,530 / year for EU students.',
    avgLivingCostPerYear: '€12,000 - €15,000 / year.',
    languageRequirements: 'IELTS 6.5 - 7.0 or TOEFL 90 - 100.',
    blockedAccountRequired: false,
    visaProcessSummary: 'University submits MVV / residence permit application on behalf of the admitted student directly to the Dutch IND.',
    postStudyWorkVisa: '1-Year "Zoekjaar" (Search Year visa) for graduates of top 200 global universities or Dutch universities.',
    prEligibility: 'Highly Skilled Migrant (Kennismigrant) visa leading to permanent residency or EU citizenship in 5 years.',
    officialImmigrationUrl: 'https://ind.nl/en/residence-permits/study',
    keyChecklist: [
      { item: 'Bachelor’s Transcripts & Diploma', category: 'Academic', requirementType: 'Required', description: 'Notarized academic records with credit breakdowns.', officialSourceUrl: 'https://www.studyinnl.org' },
      { item: 'Proof of Financial Means (IND rate)', category: 'Financial', requirementType: 'Required', description: 'Proof of ~€12,500/year living costs transferred to university escrow or bank letter.', officialSourceUrl: 'https://ind.nl' },
      { item: 'IELTS / TOEFL Official Scorecard', category: 'Language', requirementType: 'Required', description: 'English proficiency verification.', officialSourceUrl: 'https://www.studyinnl.org' },
      { item: 'Antecedents Certificate', category: 'Visa', requirementType: 'Required', description: 'Declaration of clean criminal history for Dutch immigration IND.', officialSourceUrl: 'https://ind.nl' }
    ]
  },

  // 5. CANADA
  {
    id: 'guide-canada',
    country: 'Canada',
    flag: '🇨🇦',
    overview: 'Canada provides exceptional master’s research opportunities, co-op paid internships, and transparent pathways to post-graduation work permits (PGWP) and Permanent Residency.',
    tuitionOverview: 'CAD $20,000 - $55,000 / year.',
    avgLivingCostPerYear: 'CAD $20,635 / year (Mandatory Guaranteed Investment Certificate - GIC).',
    languageRequirements: 'IELTS Academic (6.5 - 7.5 minimum 6.0 in each band) or TOEFL (90+).',
    blockedAccountRequired: true,
    blockedAccountAmount: 'CAD $20,635 (Federal GIC requirement)',
    visaProcessSummary: 'Secure DLI admission letter, purchase Guaranteed Investment Certificate (GIC), upfront medical exam, and apply via Student Direct Stream (SDS) or standard study permit.',
    postStudyWorkVisa: 'Up to 3-Year Post-Graduation Work Permit (PGWP) with full open work authorization.',
    prEligibility: 'Canadian Experience Class (CEC) under Express Entry, or Provincial Nominee Programs (PNP).',
    officialImmigrationUrl: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
    keyChecklist: [
      { item: 'DLI Letter of Acceptance (LOA)', category: 'Academic', requirementType: 'Required', description: 'Official offer from Designated Learning Institution.', officialSourceUrl: 'https://www.canada.ca' },
      { item: 'Guaranteed Investment Certificate (GIC - CAD $20,635)', category: 'Financial', requirementType: 'Required', description: 'Restricted escrow investment through Scotiabank, CIBC, or ICICI Canada.', officialSourceUrl: 'https://www.canada.ca' },
      { item: 'IELTS Academic Scorecard', category: 'Language', requirementType: 'Required', description: 'Official score meeting CLB 7+ criteria.', officialSourceUrl: 'https://www.ielts.org' },
      { item: 'Upfront Medical Examination (IME)', category: 'Visa', requirementType: 'Required', description: 'Medical check by IRCC panel physician.', officialSourceUrl: 'https://www.canada.ca' }
    ]
  },

  // 6. SINGAPORE
  {
    id: 'guide-singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    overview: 'Singapore is Asia’s premier technology, artificial intelligence, and financial services capital, hosting regional APAC headquarters for Google, Meta, ByteDance, Shopee, Grab, and top-tier sovereign wealth funds.',
    tuitionOverview: 'SGD $38,000 - $60,000 for full program; tuition grants available for Singapore PRs and citizens.',
    avgLivingCostPerYear: 'SGD $16,000 - $22,000 / year.',
    languageRequirements: 'IELTS 6.5+ or TOEFL 90+. English is the official national medium of instruction and business.',
    blockedAccountRequired: false,
    visaProcessSummary: 'Upon admission, university registers applicant on ICA SOLAR (Student’s Pass Online Application & Registration) system to receive In-Principle Approval (IPA) letter.',
    postStudyWorkVisa: '1-Year Long-Term Visit Pass (LTVP) for local autonomous university graduates to seek employment in Singapore, leading to an Employment Pass (EP).',
    prEligibility: 'Eligible to apply for Singapore Permanent Residence after employment under Employment Pass (EP) or S-Pass.',
    officialImmigrationUrl: 'https://www.ica.gov.sg/reside/STP/apply',
    keyChecklist: [
      { item: 'SOLAR In-Principle Approval (IPA) Letter', category: 'Visa', requirementType: 'Required', description: 'Entry visa issued through ICA portal by the sponsor university.', officialSourceUrl: 'https://www.ica.gov.sg' },
      { item: 'Official Transcripts & Degree Certificate', category: 'Academic', requirementType: 'Required', description: 'Verified academic credentials and semester mark sheets.', officialSourceUrl: 'https://nus.edu.sg' },
      { item: 'Proof of Financial Solvency (~SGD $30,000)', category: 'Financial', requirementType: 'Required', description: 'Bank statement covering tuition and living expenses.', officialSourceUrl: 'https://www.ica.gov.sg' },
      { item: 'Medical Examination Report', category: 'Visa', requirementType: 'Required', description: 'Mandatory HIV and chest X-ray screening completed in Singapore for Student’s Pass issuance.', officialSourceUrl: 'https://www.ica.gov.sg' },
      { item: 'IELTS / TOEFL Official Scorecard', category: 'Language', requirementType: 'Required', description: 'English proficiency scorecard sent to university registrar.', officialSourceUrl: 'https://www.ielts.org' }
    ]
  },

  // 7. AUSTRIA
  {
    id: 'guide-austria',
    country: 'Austria',
    flag: '🇦🇹',
    overview: 'Austria boasts world-renowned public universities in Vienna, Graz, Linz, and Innsbruck, offering near-zero tuition for EU students and very affordable fees (~€727/semester) for non-EU students. Renowned for computer science, robotics, logic, and artificial intelligence.',
    tuitionOverview: 'Public universities: €363.36 / semester for EU/EEA students; €726.72 / semester for Non-EU/international students + €24.70 Austrian Student Union (ÖH) fee.',
    avgLivingCostPerYear: '€11,000 - €14,000 / year (~€950 - €1,150 / month)',
    languageRequirements: 'English-taught masters: IELTS 6.5 - 7.0 or TOEFL 90 - 100. German A1-B1 beneficial for integration and part-time student employment.',
    blockedAccountRequired: true,
    blockedAccountAmount: '€11,400 - €14,000 / year (depending on age: under 24 requires ~€672/month; 24 or older requires ~€1,218/month in bank proof)',
    visaProcessSummary: 'Submit Residence Permit - Student (Aufenthaltsbewilligung Student) at the Austrian Embassy/Consulate with Zulassungsbescheid (admission notice), proof of adequate accommodation (Wohnrechtsvereinbarung), and police clearance.',
    postStudyWorkVisa: '12-Month Job Seeker Residence Permit (Rot-Weiß-Rot – Karte für Studienabsolventen) for university graduates to seek qualified employment in Austria.',
    prEligibility: 'Red-White-Red Card (Rot-Weiß-Rot - Karte) with reduced points for Austrian university graduates, leading to Permanent Residence (Daueraufenthalt - EU) after 5 years.',
    officialImmigrationUrl: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/graduates/',
    keyChecklist: [
      { item: 'Zulassungsbescheid (University Admission Letter)', category: 'Academic', requirementType: 'Required', description: 'Official confirmation of admission from Austrian university.', officialSourceUrl: 'https://studyinaustria.at' },
      { item: 'Proof of Accommodation (Wohnrechtsvereinbarung)', category: 'Visa', requirementType: 'Required', description: 'Legally binding rental agreement or student dorm contract for at least 1 year.', officialSourceUrl: 'https://oead.at' },
      { item: 'Financial Means Verification', category: 'Financial', requirementType: 'Required', description: 'Proof of subsistence funds in an Austrian or international bank account.', officialSourceUrl: 'https://www.migration.gv.at' },
      { item: 'Police Clearance Certificate (Apostilled)', category: 'Special', requirementType: 'Required', description: 'Criminal background check from country of residence issued within 3 months.', officialSourceUrl: 'https://www.bmeia.gv.at' },
      { item: 'Comprehensive Health Insurance (ÖGK or Private)', category: 'Visa', requirementType: 'Required', description: 'Student health insurance valid in Austria covering all risks.', officialSourceUrl: 'https://www.gesundheitskasse.at' }
    ]
  },

  // 8. AUSTRALIA
  {
    id: 'guide-australia',
    country: 'Australia',
    flag: '🇦🇺',
    overview: 'Australia is a premier destination for global research and technology degrees, home to the Group of Eight (Go8) universities. Offers world-leading facilities in data science, cybersecurity, and artificial intelligence, backed by generous post-study work rights.',
    tuitionOverview: 'Average Master’s tuition: AUD $38,000 - $54,000 / year for international students.',
    avgLivingCostPerYear: 'AUD $29,710 / year (Department of Home Affairs official financial requirement).',
    languageRequirements: 'IELTS Academic 6.5 (no band below 6.0) or PTE Academic 58-65, or TOEFL iBT 79-90.',
    blockedAccountRequired: false,
    visaProcessSummary: 'Accept university unconditional offer, pay initial tuition deposit to receive Confirmation of Enrolment (CoE), purchase OSHC (Overseas Student Health Cover), and apply online for Subclass 500 Student Visa.',
    postStudyWorkVisa: 'Subclass 485 Temporary Graduate Visa granting 2 to 4 years post-study work authorization (extended for regional study locations).',
    prEligibility: 'General Skilled Migration (Subclass 189/190/491) points-tested permanent residency pathways for ICT and Data professionals.',
    officialImmigrationUrl: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
    keyChecklist: [
      { item: 'Confirmation of Enrolment (CoE)', category: 'Academic', requirementType: 'Required', description: 'Official digital document issued by CRICOS-registered Australian institution.', officialSourceUrl: 'https://immi.homeaffairs.gov.au' },
      { item: 'Overseas Student Health Cover (OSHC)', category: 'Visa', requirementType: 'Required', description: 'Mandatory health cover for duration of student visa (Medibank, Bupa, Allianz).', officialSourceUrl: 'https://www.health.gov.au' },
      { item: 'Genuine Student (GS) Statement', category: 'Academic', requirementType: 'Required', description: 'Comprehensive personal statement demonstrating genuine intent to study in Australia.', officialSourceUrl: 'https://immi.homeaffairs.gov.au' },
      { item: 'Financial Capacity Evidence (AUD $29,710+)', category: 'Financial', requirementType: 'Required', description: 'Bank statements covering 1st year living expenses and tuition fees.', officialSourceUrl: 'https://immi.homeaffairs.gov.au' },
      { item: 'IELTS / PTE Academic Official Score', category: 'Language', requirementType: 'Required', description: 'English proficiency test meeting university and visa thresholds.', officialSourceUrl: 'https://www.ielts.org' }
    ]
  },

  // 9. NEW ZEALAND
  {
    id: 'guide-newzealand',
    country: 'New Zealand',
    flag: '🇳🇿',
    overview: 'New Zealand offers world-class education across all 8 state-funded universities, consistently ranked in the global top 3% (QS). With stunning natural environments, welcoming multicultural communities, and high quality of life, NZ is a top choice for tech and data postgraduates.',
    tuitionOverview: 'NZD $34,000 - $48,000 / year for international Master’s students.',
    avgLivingCostPerYear: 'NZD $20,000 / year (mandated by Immigration New Zealand for student visa approval).',
    languageRequirements: 'IELTS Academic 6.5 overall (minimum 6.0 in each band) or TOEFL iBT 90+.',
    blockedAccountRequired: false,
    visaProcessSummary: 'Obtain Offer of Place from university, pay tuition fees, provide proof of NZD $20,000/year living funds, obtain medical/chest X-ray certificate, and submit Fee Paying Student Visa application online via Immigration NZ.',
    postStudyWorkVisa: 'Post-Study Work Visa (PSWV) for up to 3 years for Master’s degree graduates (Levels 9-10).',
    prEligibility: 'Skilled Migrant Category (SMC) Resident Visa: 6-point system offering direct residence pathways for NZ Master’s graduates in tech and green list occupations.',
    officialImmigrationUrl: 'https://www.immigration.govt.nz/new-zealand-visas/visas/visa/fee-paying-student-visa',
    keyChecklist: [
      { item: 'Offer of Place from University', category: 'Academic', requirementType: 'Required', description: 'Formal unconditional acceptance letter from accredited NZ institution.', officialSourceUrl: 'https://www.studywithnewzealand.govt.nz' },
      { item: 'Tuition Fee Payment Receipt', category: 'Financial', requirementType: 'Required', description: 'Official receipt verifying payment of 1st year international tuition fees.', officialSourceUrl: 'https://www.immigration.govt.nz' },
      { item: 'Proof of Funds (NZD $20,000/year)', category: 'Financial', requirementType: 'Required', description: 'Funds to cover living costs deposited in verified bank account.', officialSourceUrl: 'https://www.immigration.govt.nz' },
      { item: 'Medical & Chest X-ray Certificate', category: 'Visa', requirementType: 'Required', description: 'Health assessment completed by INZ panel physician.', officialSourceUrl: 'https://www.immigration.govt.nz' },
      { item: 'Approved International Student Medical Insurance', category: 'Visa', requirementType: 'Required', description: 'Compliant medical and travel insurance policy for entire study period.', officialSourceUrl: 'https://www.immigration.govt.nz' }
    ]
  },

  // 10. ITALY
  {
    id: 'guide-italy',
    country: 'Italy',
    flag: '🇮🇹',
    overview: 'Italy combines historic academic excellence with modern engineering and data science prowess. Home to Politecnico di Milano, Politecnico di Torino, and University of Bologna (the world\'s oldest university), Italy offers hundreds of English-taught Master’s degrees with very low tuition.',
    tuitionOverview: 'Public universities: €1,000 - €4,000 / year (often calculated on student family income via ISEE Parificato, potentially reducing to €150 - €500/year).',
    avgLivingCostPerYear: '€8,500 - €13,000 / year (~€700 - €1,100 / month depending on city)',
    languageRequirements: 'IELTS Academic 6.0 - 6.5 or TOEFL iBT 80 - 90 for English-taught degrees.',
    blockedAccountRequired: false,
    visaProcessSummary: 'Register on the Universitaly portal, submit pre-enrolment application, obtain Italian consular validation, request Declaration of Value (DOV) or CIMEA Statement of Comparability, and apply for National Type D Student Visa.',
    postStudyWorkVisa: '12-Month Job Search / Permesso di Soggiorno per Ricerca Lavoro o Imprenditorialità degli Studenti for Italian master’s graduates.',
    prEligibility: 'Permesso di soggiorno UE per soggiornanti di lungo periodo (EU Long-Term Residence Permit) after 5 years of legal residence.',
    officialImmigrationUrl: 'https://www.universitaly.it',
    keyChecklist: [
      { item: 'Universitaly Pre-Enrolment Summary', category: 'Special', requirementType: 'Required', description: 'Mandatory pre-enrolment verification on official Ministry portal (Universitaly).', officialSourceUrl: 'https://www.universitaly.it' },
      { item: 'CIMEA Statement of Comparability / DOV', category: 'Academic', requirementType: 'Required', description: 'Official academic recognition certificate evaluating foreign undergraduate degree.', officialSourceUrl: 'https://www.cimea.it' },
      { item: 'Proof of Financial Means (€6,000+ / year)', category: 'Financial', requirementType: 'Required', description: 'Bank statement showing minimum €467.65 per month for student subsistence.', officialSourceUrl: 'https://vistoperitalia.esteri.it' },
      { item: 'Proof of Accommodation in Italy', category: 'Visa', requirementType: 'Required', description: 'Lease contract or declaration of hospitality (Dichiarazione di ospitalità).', officialSourceUrl: 'https://vistoperitalia.esteri.it' },
      { item: 'International Health Insurance Coverage', category: 'Visa', requirementType: 'Required', description: 'Health policy with minimum €30,000 emergency medical coverage in Schengen area.', officialSourceUrl: 'https://vistoperitalia.esteri.it' }
    ]
  },

  // 11. CHINA
  {
    id: 'guide-china',
    country: 'China',
    flag: '🇨🇳',
    overview: 'Mainland China is an AI and high-performance computing superpower, investing heavily in state-of-the-art laboratories and Double First-Class universities. Institutions like Tsinghua, Peking, and SJTU offer prestigious English-taught graduate programs and generous Chinese Government Scholarships (CSC).',
    tuitionOverview: 'RMB 26,000 - 50,000 / year (~$3,600 - $7,000 USD / year) for public universities.',
    avgLivingCostPerYear: 'RMB 30,000 - 48,000 / year (~$4,200 - $6,700 USD / year)',
    languageRequirements: 'English-taught programs: IELTS 6.5+ or TOEFL 85-90+. (No HSK requirement for English programs; Chinese language electives provided).',
    blockedAccountRequired: false,
    visaProcessSummary: 'Receive official JW201 / JW202 form (Visa Application for Study in China) and University Admission Notice, complete Physical Examination Record for Foreigner, and apply for X1 Student Visa at Chinese Visa Application Service Center (CVASC).',
    postStudyWorkVisa: 'Post-graduate work permit (Work Visa Z) pathways for outstanding foreign Master’s graduates from recognized Chinese universities.',
    prEligibility: 'Chinese Foreigner’s Permanent Residence Card (Five-Star Card) for high-level foreign talents and key technology professionals.',
    officialImmigrationUrl: 'https://www.campuschina.org',
    keyChecklist: [
      { item: 'JW201 / JW202 Form', category: 'Visa', requirementType: 'Required', description: 'Official government visa approval form issued by Ministry of Education.', officialSourceUrl: 'https://www.campuschina.org' },
      { item: 'Admission Notice from University', category: 'Academic', requirementType: 'Required', description: 'Official university letter of acceptance.', officialSourceUrl: 'https://www.campuschina.org' },
      { item: 'Physical Examination Record for Foreigner', category: 'Visa', requirementType: 'Required', description: 'Mandatory health check signed by doctor including blood test and chest X-ray.', officialSourceUrl: 'https://www.visaforchina.cn' },
      { item: 'Police Non-Criminal Record Certificate', category: 'Special', requirementType: 'Required', description: 'Notarized and legalized criminal background clearance.', officialSourceUrl: 'https://www.visaforchina.cn' },
      { item: 'Financial Guarantee / Bank Proof ($5,000+)', category: 'Financial', requirementType: 'Required', description: 'Proof of funds or Chinese Government Scholarship (CSC) award letter.', officialSourceUrl: 'https://www.campuschina.org' }
    ]
  },

  // 12. JAPAN
  {
    id: 'guide-japan',
    country: 'Japan',
    flag: '🇯🇵',
    overview: 'Japan is a global leader in robotics, electronics, artificial intelligence, and precision engineering. Through the Top Global University Project, premier imperial universities (University of Tokyo, Kyoto, Osaka, Tohoku) offer 100% English-taught Master’s degrees backed by MEXT scholarships and attractive fast-track permanent residency.',
    tuitionOverview: 'National universities: Standard nationwide tuition of ¥535,800 / year (~$3,500 USD) + one-time admission fee of ¥282,000.',
    avgLivingCostPerYear: '¥1,200,000 - ¥1,800,000 / year (~$8,000 - $12,000 USD / year)',
    languageRequirements: 'English-taught programs: TOEFL iBT 80-90 or IELTS 6.5+. No Japanese language prerequisite for English degree tracks.',
    blockedAccountRequired: false,
    visaProcessSummary: 'University applies to Japanese Immigration Services Agency for Certificate of Eligibility (COE). Once COE is issued, submit passport and COE to Japanese Embassy/Consulate to receive College Student Visa within 5-7 days.',
    postStudyWorkVisa: 'Designated Activities Visa (Job Hunting) for 6 to 12 months post-graduation, transitioning into Engineer/Specialist in Humanities/International Services work visa.',
    prEligibility: 'Highly Skilled Professional (HSP) points system: Master’s graduates from top Japanese universities earn bonus points, qualifying for Permanent Residence in just 1 to 2 years.',
    officialImmigrationUrl: 'https://www.studyinjapan.go.jp/en/',
    keyChecklist: [
      { item: 'Certificate of Eligibility (COE)', category: 'Visa', requirementType: 'Required', description: 'Official document issued by Japanese Ministry of Justice via host university.', officialSourceUrl: 'https://www.moj.go.jp' },
      { item: 'Letter of Admission (Nyugaku Kyokasho)', category: 'Academic', requirementType: 'Required', description: 'Formal acceptance from the Graduate School.', officialSourceUrl: 'https://www.studyinjapan.go.jp' },
      { item: 'Financial Support Proof (¥2,000,000+)', category: 'Financial', requirementType: 'Required', description: 'Bank balance certificate or MEXT/JASSO scholarship award certificate.', officialSourceUrl: 'https://www.jasso.go.jp' },
      { item: 'Graduation Certificate & Transcripts', category: 'Academic', requirementType: 'Required', description: 'Certified undergraduate diploma and course grades.', officialSourceUrl: 'https://www.studyinjapan.go.jp' },
      { item: 'TOEFL / IELTS Score Report', category: 'Language', requirementType: 'Required', description: 'Official English proficiency test results.', officialSourceUrl: 'https://www.ets.org' }
    ]
  },

  // 13. SPAIN
  {
    id: 'guide-spain',
    country: 'Spain',
    flag: '🇪🇸',
    overview: 'Spain is a major tech and startup hub in southern Europe, with vibrant innovation clusters in Barcelona, Madrid, and Valencia. Public universities offer top-tier, internationally accredited Master’s programs with remarkably affordable tuition and a sunny Mediterranean lifestyle.',
    tuitionOverview: 'Public universities: €1,500 - €4,500 / year for international students; calculated per credit (~€25 - €70 / ECTS credit).',
    avgLivingCostPerYear: '€9,000 - €13,000 / year (~€750 - €1,100 / month)',
    languageRequirements: 'IELTS Academic 6.5 or TOEFL iBT 85-90 for English-taught master’s programs.',
    blockedAccountRequired: false,
    visaProcessSummary: 'Apply for National Type D Student Visa at the Spanish Consulate. Required documents include university acceptance letter, proof of financial funds (IPREM benchmark: 100% IPREM ~€600/month), international health insurance (Sin copago), and medical certificate.',
    postStudyWorkVisa: '12-Month Job Search Residence Permit (Autorización de estancia para la búsqueda de empleo) for international Master’s graduates.',
    prEligibility: 'Fast-track citizenship in 2 years for nationals of Ibero-American countries, Philippines, Andorra; standard EU long-term residency after 5 years.',
    officialImmigrationUrl: 'https://www.studyinginspain.com',
    keyChecklist: [
      { item: 'Admission Letter (Carta de Admisión)', category: 'Academic', requirementType: 'Required', description: 'Unconditional admission to full-time Master’s program.', officialSourceUrl: 'https://www.educacionfpydeportes.gob.es' },
      { item: 'Financial Solvency Proof (100% IPREM)', category: 'Financial', requirementType: 'Required', description: 'Proof of at least €7,200/year (100% of IPREM) for living expenses.', officialSourceUrl: 'https://www.inclusion.gob.es' },
      { item: 'Private Health Insurance (Sin Carencia ni Copago)', category: 'Visa', requirementType: 'Required', description: 'Full coverage insurance with a company authorized to operate in Spain (Sanitas, Adeslas).', officialSourceUrl: 'https://www.inclusion.gob.es' },
      { item: 'Medical Certificate (Certificado Médico)', category: 'Visa', requirementType: 'Required', description: 'Medical check certifying freedom from diseases under International Health Regulations 2005.', officialSourceUrl: 'https://www.exteriores.gob.es' },
      { item: 'Apostilled Criminal Record Certificate', category: 'Special', requirementType: 'Required', description: 'Police clearance from countries lived in during past 5 years, apostilled/legalized.', officialSourceUrl: 'https://www.exteriores.gob.es' }
    ]
  },

  // 14. FRANCE
  {
    id: 'guide-france',
    country: 'France',
    flag: '🇫🇷',
    overview: 'France is renowned worldwide for mathematics, computational science, and AI excellence (home to Station F, Mistral AI, Meta FAIR Paris, and INRIA). Highly subsidized public university tuition makes France one of the world\'s highest-value study abroad destinations.',
    tuitionOverview: 'Public universities: €3,770 / year for Non-EU Master’s students (often partially waived to standard rate of €243/year by universities under internal international mobility accords).',
    avgLivingCostPerYear: '€9,600 - €14,000 / year (Government housing subsidy CAF / APL covers 20-40% of student rent).',
    languageRequirements: 'English-taught programs: IELTS 6.5+ or TOEFL 90+. French proficiency not required for English tracks; free French courses provided.',
    blockedAccountRequired: false,
    visaProcessSummary: 'Apply through Campus France (Études en France) procedure, complete academic interview, receive visa validation, and submit Long-Stay Student Visa (VLS-TS) application.',
    postStudyWorkVisa: '12-Month Job Search / Business Creation Visa (RECE - Recherche d\'emploi / création d\'entreprise) for Master’s degree holders.',
    prEligibility: 'Accelerated 2-Year Naturalization Rule: Foreign students who successfully graduate with a 2-year Master’s degree from a French higher education institution can apply for French citizenship after just 2 years of professional residence.',
    officialImmigrationUrl: 'https://www.campusfrance.org/en',
    keyChecklist: [
      { item: 'Campus France EEF File & Interview Validation', category: 'Special', requirementType: 'Required', description: 'Mandatory pre-consular validation through Études en France platform.', officialSourceUrl: 'https://www.campusfrance.org' },
      { item: 'University Attestation d’Admission', category: 'Academic', requirementType: 'Required', description: 'Official French university certificate of admission.', officialSourceUrl: 'https://www.enseignementsup-recherche.gouv.fr' },
      { item: 'Proof of Financial Resources (€615 / month)', category: 'Financial', requirementType: 'Required', description: 'Proof of minimum €7,380 per year in liquid bank funds.', officialSourceUrl: 'https://france-visas.gouv.fr' },
      { item: 'Proof of Accommodation for First 3 Months', category: 'Visa', requirementType: 'Required', description: 'CROUS student residence reservation, hotel booking, or attestation d\'hébergement.', officialSourceUrl: 'https://www.crous.fr' },
      { item: 'IELTS / TOEFL Official Scorecard', category: 'Language', requirementType: 'Required', description: 'Proof of English language competence for English-taught master.', officialSourceUrl: 'https://www.ielts.org' }
    ]
  },

  // 15. LUXEMBOURG
  {
    id: 'guide-luxembourg',
    country: 'Luxembourg',
    flag: '🇱🇺',
    overview: 'The Grand Duchy of Luxembourg is Europe’s richest nation per capita, a premier financial and institutional hub (European Investment Bank, European Court of Justice, Amazon EU HQ), and a pioneer in high-performance computing (MeluXina supercomputer). The University of Luxembourg offers state-of-the-art master’s degrees with very low tuition.',
    tuitionOverview: 'University of Luxembourg: €200 / semester (€400 / year) for almost all Master’s programs.',
    avgLivingCostPerYear: '€14,000 - €18,000 / year (Note: All public transport across trains, trams, and buses in Luxembourg is 100% FREE for everyone).',
    languageRequirements: 'IELTS Academic 6.5+ or TOEFL iBT 90+ for English-taught programs. French or German knowledge is an asset but not required for English curricula.',
    blockedAccountRequired: true,
    blockedAccountAmount: '€11,000 - €13,000 / year (~€950/month in bank proof of subsistence)',
    visaProcessSummary: 'Obtain university admission letter, apply for Temporary Authorisation to Stay (Autorisation de séjour temporaire) with the Ministry of Foreign and European Affairs, obtain Type D visa, and register at the local commune upon arrival.',
    postStudyWorkVisa: '12-Month Job Search Residence Permit (Authorisation de séjour pour recherche d’emploi ou création d’entreprise) for Master’s graduates.',
    prEligibility: 'EU Blue Card or salaried worker residence permit leading to Luxembourg permanent residence and citizenship (with Luxembourgish language test) after 5 years.',
    officialImmigrationUrl: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/etudiant.html',
    keyChecklist: [
      { item: 'Temporary Authorisation to Stay (AST)', category: 'Visa', requirementType: 'Required', description: 'Mandatory pre-visa approval issued by Luxembourg Immigration Directorate.', officialSourceUrl: 'https://guichet.public.lu' },
      { item: 'University of Luxembourg Zulassung / Admission', category: 'Academic', requirementType: 'Required', description: 'Official enrollment acceptance letter.', officialSourceUrl: 'https://www.uni.lu' },
      { item: 'Proof of Sufficient Financial Means', category: 'Financial', requirementType: 'Required', description: 'Bank guarantee or proof of at least €950/month in living resources.', officialSourceUrl: 'https://guichet.public.lu' },
      { item: 'Police Clearance Certificate', category: 'Special', requirementType: 'Required', description: 'Recent criminal record extract apostilled or legalized.', officialSourceUrl: 'https://guichet.public.lu' },
      { item: 'Health Insurance Proof', category: 'Visa', requirementType: 'Required', description: 'International travel and student health insurance policy.', officialSourceUrl: 'https://cns.public.lu' }
    ]
  },

  // 16. SWITZERLAND
  {
    id: 'guide-switzerland',
    country: 'Switzerland',
    flag: '🇨🇭',
    overview: 'Switzerland is home to world-leading polytechnics (ETH Zurich and EPFL) and top research universities. Swiss universities charge exceptionally low tuition fees (~CHF 500 - 1,500/semester) while boasting world-record research funding, unmatched industry partnerships (Google, CERN, Novartis, Roche), and Europe\'s highest graduate salaries.',
    tuitionOverview: 'Public universities: CHF 500 - CHF 1,500 / semester (~$1,100 - $3,300 USD / year) for all students at ETH Zurich, EPFL, and cantonal universities.',
    avgLivingCostPerYear: 'CHF 20,000 - CHF 26,000 / year (~CHF 1,800 - CHF 2,200 / month)',
    languageRequirements: 'IELTS Academic 7.0 or TOEFL iBT 100 for English-taught Master’s degrees. GRE often required for non-Bologna degrees at ETH and EPFL.',
    blockedAccountRequired: true,
    blockedAccountAmount: 'CHF 21,000 / year (mandatory proof of funds in a FINMA-approved Swiss bank or recognized branch)',
    visaProcessSummary: 'Apply for National Visa D via Swiss Embassy/Consulate. Application is forwarded to the cantonal migration office (e.g. Migrationamt Zurich/Vaud). Once approved, visa is stamped and student registers for residence permit B (Ausländerausweis B) upon arrival.',
    postStudyWorkVisa: '6-Month Post-Study Job Search Permit under the Swiss Federal Act on Foreign Nationals (AIG) for Swiss university graduates.',
    prEligibility: 'Work authorization via Swiss employer quota; permanent residence (Permis C / Niederlassungsbewilligung) after 10 years (or 5 years under specific international treaties).',
    officialImmigrationUrl: 'https://www.eda.admin.ch/eda/en/home/entry-switzerland-residence/visas.html',
    keyChecklist: [
      { item: 'Swiss University Admission Confirmation', category: 'Academic', requirementType: 'Required', description: 'Official matriculation letter from ETH, EPFL, or Swiss cantonal university.', officialSourceUrl: 'https://www.swissuniversities.ch' },
      { item: 'Proof of Financial Solvency (CHF 21,000)', category: 'Financial', requirementType: 'Required', description: 'Confirmation letter from a Swiss bank (or bank with branch in Switzerland) showing at least CHF 21,000.', officialSourceUrl: 'https://www.sem.admin.ch' },
      { item: 'Study Commitment & Integration Plan', category: 'Academic', requirementType: 'Required', description: 'Written commitment confirming student will leave Switzerland upon completion of degree.', officialSourceUrl: 'https://www.sem.admin.ch' },
      { item: 'Curriculum Vitae & Motivation Letter', category: 'Academic', requirementType: 'Required', description: 'Academic motivation explaining why Switzerland is chosen for this degree.', officialSourceUrl: 'https://www.eda.admin.ch' },
      { item: 'IELTS / TOEFL Official Scorecard', category: 'Language', requirementType: 'Required', description: 'Proof of high-level English proficiency (C1 level / IELTS 7.0+).', officialSourceUrl: 'https://www.ielts.org' }
    ]
  }
];
