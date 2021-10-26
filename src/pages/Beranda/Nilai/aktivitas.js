import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Aktivitas = () => {
  const data = [
    {tahun_ajaran: "2019/2020", semester: "genap", status: "aktif", total_sks: "64", ips: '3.4250', ipk:'3.3813', sks_semester: '24'},
    {tahun_ajaran: "2019/2020", semester: "genap", status: "aktif", total_sks: "64", ips: '3.4250', ipk:'3.3813', sks_semester: '24'},
    {tahun_ajaran: "2019/2020", semester: "genap", status: "aktif", total_sks: "64", ips: '3.4250', ipk:'3.3813', sks_semester: '24'},
    {tahun_ajaran: "2019/2020", semester: "genap", status: "aktif", total_sks: "64", ips: '3.4250', ipk:'3.3813', sks_semester: '24'},
    {tahun_ajaran: "2019/2020", semester: "genap", status: "aktif", total_sks: "64", ips: '3.4250', ipk:'3.3813', sks_semester: '24'},

  ]

  return (
    <>
    {data.map((data) => 
    <View style={styles.container}>
      <View style={styles.textLayout}>
        <View style={styles.mainLabel}>
          <View>
            <View>
              <Text>{data.tahun_ajaran} {data.semester}</Text>
            </View>
            <View>
              <Text>{data.status}</Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginLeft: 100 }}>
            <Text>{data.ips}</Text>
            <Text>IPS</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>{data.ipk}</Text>
            <Text>IPK</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 9,
            borderBottomColor: "#E8E1D9",
            borderBottomWidth: 1,
          }}
        />
        <View style={{justifyContent: "space-between", flexDirection: 'row', marginTop: 3}}>
          <View>
            <Text style={{color: "#F8DF8B"}}>SKS Total {data.total_sks}</Text>
          </View>
          <View>
            <Text>SKS Semester {data.sks_semester}</Text>
          </View>
        </View>
      </View>
    </View>
    )}
    </>
  );
};

export default Aktivitas;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "flex-start",
    marginHorizontal: 10,
    height: 100,
    padding: 20,
    marginTop: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textLayout: {
    justifyContent: "flex-start",
  },
  mainLabel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
