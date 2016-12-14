class XML_tools{

    static getTrials(xml){

    }


}


class TrialOrder{

    static run(script){

        let trialBlocks = []
        let blockXMLs = XML_tools.getTrials(script)

        TrialOrder.add_overTrial_blocks(blockXMLs);


        let trialBlock = null
        let i = 0
        let counter = 0
        let skeletons = [];

        for (let block of blockXMLs) {

            //not happy about the below. But keeps independence from the overall script I guess.
            //this method may work: xml.elementsNamed("TRIAL")
            //block = Xml.parse(block.toString());

            trialBlock = new TrialBlock();

            trialBlock.setup(block, counter, i++);

            if (trialBlock.numTrials > 0) {
                trialBlocks[trialBlocks.length] = trialBlock;
                counter += trialBlock.numTrials;
            }
            skeletons[skeletons.length] = new TrialSkeleton(trialBlock);

        }

        //let trialOrderTools:TrialOrderTools = new TrialOrderTools();
        //let trialOrder:Array<Int> = trialOrderTools.composeOrder(trialBlocks);


        //return new Tuple2(trialOrder, skeletons);

    }

    static add_overTrial_blocks(arr) {
    }




}
