export const orgData = [
    {
      name: "Khối Tài Chính",
      departmentIds: [1, 2],
      departments: [
        {
          name: "Bộ Phận Kinh Doanh",
          divisionId: 1,
          sectionIds: [1],
          sections: [
            {
              name: "Ban Chỉ huy Tài chính",
              departmentId: 1,
              unitIds: [1],
              units: [
                {
                  name: "Phòng CNTT",
                  sectionId: 1,
                  teamIds: [1],
                  teams: [
                    {
                      name: "Tổ 1",
                      unitId: 1,
                      id: 1,
                      mainID: "D0001"
                    }
                  ],
                  id: 1,
                  mainID: "PH0001"
                }
              ],
              id: 1,
              mainID: "SEC0001"
            }
          ],
          id: 1,
          mainID: "DEP0001"
        },
        {
          name: "Bộ Phận Kế Toán",
          divisionId: 1,
          sectionIds: [],
          sections: [],
          id: 2,
          mainID: "DEP0002"
        }
      ],
      id: 1,
      mainID: "DP001"
    }
  ];
  