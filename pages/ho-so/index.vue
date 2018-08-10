<template>
  <div>
    <fix-bar-action
      :name="candidate.personalInfo.name"
      :title="candidate.resume.basicInfo.title"
      :yearsOfExperience="candidate.resume.basicInfo.yearsOfExperience"
    />

    <search-bar/>

    <el-row class="container">
      <breadcrumb
        :title="candidate.resume.basicInfo.title"
        :breadcrumbObj="breadcrumbObj"
      />
      <Banner/>
      <el-row :gutter="20">
        <el-col :span="16">
          <el-row class="candidate-info">
            <candidate-cover
              id="1244668"
              numberOfViews="1235456"
              :position="candidate.resume.basicInfo.title"
              :name="candidate.personalInfo.name"
              :workExperience="candidate.resume.basicInfo.yearsOfExperience"
              phoneNumber=""
              email=""
              :imageUrl="candidate._urls.profilePicture"
            />

            <personal-info
              :name="candidate.personalInfo.name"
              :dateOfBirth="candidate.personalInfo.dateOfBirth"
              :gender="candidate.personalInfo.gender"
              :marriageStatus="candidate.personalInfo.marriageStatus"
              :address="candidate.personalInfo.address"
              :city="candidate.personalInfo.city"
            />

            <basic-info
              :workAddresses="candidate.desiredJobInfo.workAddresses"
              :professions="candidate.desiredJobInfo.professions"
              :yearsOfExperience="candidate.resume.basicInfo.yearsOfExperience"
              :jobTypes="candidate.desiredJobInfo.jobTypes"
              :position="candidate.desiredJobInfo.position"
              :salary="candidate.desiredJobInfo.salary"
              :updatedDate="candidate._updatedDate"
            />

            <job-goal
              :list="candidate.desiredJobInfo.jobGoals.list"
              :description="candidate.desiredJobInfo.jobGoals.description"
            />

            <personal-skill
              :skillsDescriptions="candidate.resume.skills.specializedSkill.description"
              :list="candidate.resume.skills.specializedSkill.list"
            />

            <work-experience
              :workExperience="candidate.resume.workExperience"
            />

            <qualification
              :qualifications="candidate.resume.qualifications"
            />

            <foreign-language
              :foreignLanguages="candidate.resume.skills.foreignLanguages"
            />

            <computer-skills
              :computerSkills="candidate.resume.skills.computerSkill"
            />

            <contact
              :name="candidate.personalInfo.name"
              :address="candidate.personalInfo.address"
              :phoneNumber="candidate.personalInfo.phoneNumber"
              :email="candidate.accountInfo.email"
            />
          </el-row>

        </el-col>

        <el-col :span="8">
          <dynamic-candidate-stamp/>

          <tools/>

          <dynamic-candidate/>

          <advanced-search/>
        </el-col>
      </el-row>

      <relating-candidate/>
    </el-row>


  </div>
</template>

<script>
  import SearchBar from '~/components/bars/SearchBar';
  import CandidateCard from '~/components/cards/CandidateCard';
  import TheCandidateListCategory from '~/components/categories/TheCandidateListCategory';
  import Banner from '~/components/categories/Banner';

  import CandidateCover from '~/components/ho-so/candidate-info/CandidateCover';
  import PersonalInfo from '~/components/ho-so/candidate-info/PersonalInfo';
  import BasicInfo from '~/components/ho-so/candidate-info/BasicInfo';
  import JobGoal from '~/components/ho-so/candidate-info/JobGoal';
  import PersonalSkill from '~/components/ho-so/candidate-info/PersonalSkill';
  import WorkExperience from '~/components/ho-so/candidate-info/WorkExperience';
  import Qualification from '~/components/ho-so/candidate-info/Qualification';
  import ForeignLanguage from '~/components/ho-so/candidate-info/ForeignLanguage';
  import ComputerSkills from '~/components/ho-so/candidate-info/ComputerSkills';
  import Contact from '~/components/ho-so/candidate-info/Contact';

  import AdvancedSearch from '~/components/public-components/boxs/AdvancedSearch';
  import DynamicCandidate from '~/components/ho-so/boxs/DynamicCandidate';
  import Tools from '~/components/ho-so/boxs/Tools';
  import DynamicCandidateStamp from '~/components/public-components/stamps/DynamicCandidateStamp';
  import RelatingCandidate from '~/components/ho-so/boxs/RelatingCandidate';
  import Breadcrumb from '~/components/public-components/bars/Breadcrumb';
  import FixBarAction from '~/components/ho-so/boxs/FixBarAction';


  import {JobOption} from '~/assets/js/data-options';

  export default {
    components: {
      SearchBar,
      TheCandidateListCategory,
      Banner,
      CandidateCover,
      CandidateCard,
      PersonalInfo,
      BasicInfo,
      JobGoal,
      PersonalSkill,
      WorkExperience,
      Qualification,
      ForeignLanguage,
      ComputerSkills,
      AdvancedSearch,
      DynamicCandidate,
      Tools,
      DynamicCandidateStamp,
      RelatingCandidate,
      Breadcrumb,
      FixBarAction,
      Contact
    },
    data() {
      const {
        jobTitles,
        jobs,
        workAddresses,
        workExperience,
        jobTypes,
      } = JobOption;
      return {
        scrolled: false,
        candidate: {
          accountInfo: {
            email: '',
            password: ''
          },
          personalInfo: {
            name: 'Nguyễn Yên Tú',
            gender: 'Nam',
            dateOfBirth: '23/02/1984',
            address: 'Cầu Giấy, Hà Nội',
            city: 'Hà Nội',
            nationality: 'Việt Nam',
            marriageStatus: 'Độc thân',
            phoneNumber: '01685214569'
          },
          desiredJobInfo: {
            workAddresses: ['Hà Nội', 'Hồ Chí Minh'],
            professions: ['Hoạch định dự án', 'Bất động sản', 'Nhân viên kinh doanh', 'Quản trị kinh doanh', 'Quản trị kinh doanh 2'],
            jobTypes: ['Toàn thời gian cố định, ', 'Part time'],
            position: 'Giám Đốc điều hành',
            salary: 'Trên 30 triệu',
            jobGoals: {
              list: [
                'Mong muốn tìm được chỗ làm ổn định lâu dài',
                'Mong muốn tìm được chỗ làm có cơ hội thăng tiến tốt',
                'Mong muốn tìm được chỗ làm có mức lương tốt',
                'Mong muốn tìm được nơi có cơ hội cống hiến bản thân tốt'
              ],
              description: ['Không ngừng hoàn thiện kỹ năng nghề nghiệp để trở thành người chuyên nghiệp nhất trong lĩnh vực mình đã lựa chọn.']
            },
          },
          resume: {
            basicInfo: {
              title: 'Trưởng Phòng Kinh Doanh - Giám Đốc Kinh Doanh',
              academicLevel: 'Đại học',
              yearsOfExperience: '8'
            },
            qualifications: [
              {
                type: 'Cử nhân 1',
                school: 'Trường Đại học Thương mại',
                major: 'Quản trị kinh doanh',
                level: 'Khá',
                department: 'Thương mại quốc tế',
                time: '08/2005 - 06/2009'
              },
              {
                type: 'Cử nhân 2',
                school: 'Trường Đại học Thương mại',
                major: 'Quản trị kinh doanh',
                level: 'Khá',
                department: 'Thương mại quốc tế',
                time: '08/2009 - 06/2010'
              }
            ],
            skills: {
              specializedSkill: {
                list: [
                  'Kỹ năng tổ chức',
                  'Kỹ năng lãnh đạo',
                  'Kỹ năng làm việc nhóm',
                  'Giải quyết vấn đề',
                ],
                description: [
                  'Quản lý trực tiếp bộ phận kinh doanh.',
                  'Xây dựng, phát triển và chịu trách nhiệm doanh số của phòng kinh doanh.',
                  'Lên kế hoạch tuyển dụng, phỏng vấn, quyết định nhân sự.',
                  'Đào tạo, xây dựng, hoạch định chiến lược kinh doanh.',
                  'Đưa ra các giải pháp kinh doanh kịp thời trong từng thời điểm.',
                  'Kỹ năng tìm kiếm, phân tích, đánh giá nhu cầu khách hàng tiềm năng.'
                ],
              },
              foreignLanguages: [
                {
                  language: 'Tiếng Anh',
                  level: 'Trung cấp'
                },
                {
                  language: 'Tiếng Pháp',
                  level: 'Tốt'
                }
              ],
              computerSkill: [
                {
                  skill: 'Ms Word',
                  level: 'Tốt'
                },
                {
                  skill: 'Ms Excel',
                  level: 'Tốt'
                },
                {
                  skill: 'Ms Power Point',
                  level: 'Tốt'
                },
                {
                  skill: 'Ms Outlook',
                  level: 'Tốt'
                }
              ]
            },
            workExperience: [
              {
                company: 'CÔNG TY CP TẬP ĐOÀN TRUYỀN THÔNG VÀ CÔNG NGHỆ NOVA',
                title: 'Trưởng phòng kinh doanh 1',
                startTime: '01/03/2017',
                endTime: '01/05/2018',
                isCurrentJob: false,
                description: 'Quản lý trực tiếp bộ phận kinh doanh mảng thương mại điện tử (TMĐT).',
                achievements: 'Đạt giải Best Team của bộ phận kinh doanh công ty.'
              },
              {
                company: 'CÔNG TY CP TẬP ĐOÀN TRUYỀN THÔNG ETS',
                title: 'Trưởng phòng kinh doanh 1',
                startTime: '01/09/2017',
                endTime: '01/05/2018',
                isCurrentJob: false,
                description: 'Quản lý trực tiếp bộ phận kinh doanh mảng thương mại điện tử (TMĐT).',
                achievements: 'Đạt giải Best Team của bộ phận kinh doanh công ty.'
              },
              {
                company: 'CÔNG TY CP TẬP ĐOÀN HALU',
                title: 'Trưởng phòng kinh doanh 1',
                startTime: '01/02/2017',
                endTime: '01/05/2018',
                isCurrentJob: false,
                description: 'Quản lý trực tiếp bộ phận kinh doanh mảng thương mại điện tử (TMĐT).',
                achievements: 'Đạt giải Best Team của bộ phận kinh doanh công ty.'
              }
            ]
          },
          references: [
            {
              name: '',
              company: '',
              position: '', // position
              email: '',
              phoneNumber: ''
            }
          ],
          _updatedDate: '17/08/2018',
          _urls: {
            profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGcwpvtJB4SQaxrW2cA5GG1BITwBquIq4aNN7ygJQ4NncwTBp'
          }
        },
        advancedSearchData: {
          job: '',
          workAddress: '',
          jobTitle: '',
          workExperience: '',
          jobType: '',

        },
        jobOptions: jobs,
        workAddressOptions: workAddresses,
        workExperienceOptions: workExperience,
        jobTitleOptions: jobTitles,
        jobTypeOptions: jobTypes,
        breadcrumbObj: [
          { name: 'Trang chủ', link: '/' },
          { name: 'Danh sách ứng viên', link: '/ung-vien' },
        ],
      }
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 550 && window.scrollY < 3500;
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/halujobs-variables";

  .container {
    width: $page-width;
    margin: 0 auto;
  }

</style>

<style>
  .el-input--suffix .el-input__inner,
  .el-input--prefix .el-input__inner {
    padding-left: 35px;
  }
</style>




